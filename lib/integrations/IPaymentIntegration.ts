import {IDonationDTO} from "../useCases/MakeDonation/DonationDTO";
import {User} from "../models/user.model";
import {Donation} from "../models/donation.model";

export interface IPaymentIntegration {
    findByCpfCnpj(cpfCnpj: string): Promise<IClient>;
    createClient(client: IClientCreationData): Promise<IClient>;
    createSubscription(subscription: ISubscriptionCreationData): Promise<ISubscription>
    createBilling(billing: IBillingCreationData): Promise<IBilling>
}

export interface IClientCreationData {}
export interface ISubscriptionCreationData {}
export interface IBillingCreationData {}
export interface IClient {}
export interface ISubscription {}
export interface IBilling {}

export interface IIntegrationDataMapper {
    toClientCreationData(donation: IDonationDTO, user: User): IClientCreationData;
    toSubscriptionCreationData(donationDTO: IDonationDTO, client: IClient, user: User, donation: Donation): ISubscriptionCreationData;
    toBillingCreationData(donationDTO: IDonationDTO, client: IClient, user: User, donation: Donation): IBillingCreationData;
}
