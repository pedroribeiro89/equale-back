import {IUsersRepository} from "../../repositories/IUserRepository";
import {IDonationDTO} from "./DonationDTO";
import {User} from "../../models/user.model";
import {IClient, IIntegrationDataMapper, IPaymentIntegration} from "../../integrations/IPaymentIntegration";
import {SupporterMapper} from "./SupporterMapper";
import {IDonationRepository} from "../../repositories/IDonationRepository";
import {DonationMapper} from "./DonationMapper";

export class DonationUseCase {
    constructor(
        private paymentIntegration: IPaymentIntegration,
        private integrationDataMapper: IIntegrationDataMapper,

        private userRepository: IUsersRepository,
        private supporterMapper: SupporterMapper,

        private donationRepository: IDonationRepository,
        private donationMapper: DonationMapper) {}

    async execute(donation: IDonationDTO) {
        console.log(donation);
        const user = await this.getOrCreateUser(donation);
        const client = await this.getOrCreateClient(donation, user);

        if (donation.paymentDataForm.subscription) {
            await this.createSubscription(donation, client, user);
        } else {
            await this.createDonation(donation, client, user);
        }
    }

    private async getOrCreateUser(donation: IDonationDTO): Promise<User> {
        let user = await this.userRepository.findUserByEmail(donation.userDataForm.email);
        if (user === null) {
            user = await this.userRepository.save(this.supporterMapper.toDomain(donation));
        }
        return user;
    }

    private async getOrCreateClient(donation: IDonationDTO, user: User): Promise<IClient> {
        let client = await this.paymentIntegration.findByCpfCnpj(donation.paymentDataForm.cpf);
        if (client === null) {
            client = await this.paymentIntegration.createClient(this.integrationDataMapper.toClientCreationData(donation, user));
        }
        return client;
    }

    private async createSubscription(donationDTO: IDonationDTO, client: IClient, user: User) {
        const donation = await this.donationRepository.createSubscription(this.donationMapper.toDomain(donationDTO), user);
        await this.paymentIntegration.createSubscription(
            this.integrationDataMapper.toSubscriptionCreationData(donationDTO, client, user, donation)
        );
    }

    private async createDonation(donationDTO: IDonationDTO, client: IClient, user: User) {
        const donation = await this.donationRepository.createDonation(this.donationMapper.toDomain(donationDTO), user);
        await this.paymentIntegration.createBilling(
            this.integrationDataMapper.toBillingCreationData(donationDTO, client, user, donation)
        );
    }

}
