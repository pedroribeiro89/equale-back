import {IIntegrationDataMapper} from "../../IPaymentIntegration";
import {IDonationDTO} from "../../../useCases/MakeDonation/DonationDTO";
import {
    IAsaasBillingCreationData,
    IAsaasClient,
    IAsaasClientCreationData,
    IAsaasSubscriptionCreationData
} from "./AsaasModels";
import {User} from "../../../models/user.model";
import {Donation} from "../../../models/donation.model";

export class AsaasDataMapper implements IIntegrationDataMapper {
    toClientCreationData(donation: IDonationDTO, user: User): IAsaasClientCreationData {
        return {
            name: donation.userDataForm.name,
            cpfCnpj: donation.paymentDataForm.cpf,
            email: donation.userDataForm.email,
            phone: donation.userDataForm.phone,
            postalCode: donation.userDataForm.cep.toString(),
            address: donation.userDataForm.street,
            addressNumber: donation.userDataForm.streetNumber,
            complement: donation.userDataForm.addressComplement,
            externalReference: user.id.toString(),
            notificationDisabled: false,
            observations: "criado pela plataforma equale"
        };
    }

    toSubscriptionCreationData(donationDTO: IDonationDTO, client: IAsaasClient, user: User, donation: Donation): IAsaasSubscriptionCreationData {
        let today = new Date();
        const offset = today.getTimezoneOffset();
        today = new Date(today.getTime() - (offset * 60 * 1000));
        const nextDueDate = today.toISOString().split('T')[0];

        return {
            customer: client.id,
            billingType: "CREDIT_CARD",
            nextDueDate: nextDueDate,
            value: donationDTO.paymentDataForm.donation,
            cycle: "MONTHLY",
            description: "Assinatura Plataforma Equale",
            externalReference: donation.id.toString(),
            creditCard: {
                holderName: donationDTO.paymentDataForm.cardName,
                number: donationDTO.paymentDataForm.cardNumber,
                expiryMonth: donationDTO.paymentDataForm.expiryMonth.toString(),
                expiryYear: donationDTO.paymentDataForm.expiryYear.toString(),
                ccv: donationDTO.paymentDataForm.cvv
            },
            creditCardHolderInfo: {
                name: donationDTO.userDataForm.name,
                email: donationDTO.userDataForm.email,
                cpfCnpj: donationDTO.paymentDataForm.cpf,
                postalCode: donationDTO.userDataForm.cep.toString(),
                addressNumber: donationDTO.userDataForm.streetNumber,
                addressComplement: donationDTO.userDataForm.addressComplement,
                phone: donationDTO.userDataForm.phone,
                mobilePhone: donationDTO.userDataForm.phone
            }
        };
    }

    toBillingCreationData(donationDTO: IDonationDTO, client: IAsaasClient, user: User, donation: Donation): IAsaasBillingCreationData {
        let today = new Date();
        const offset = today.getTimezoneOffset();
        today = new Date(today.getTime() - (offset * 60 * 1000));
        const dueDate = today.toISOString().split('T')[0];

        return {
            customer: client.id,
            billingType: "CREDIT_CARD",
            value: donationDTO.paymentDataForm.donation,
            dueDate: dueDate,
            description: "Doação Plataforma Equale",
            externalReference: donation.id.toString(),

            creditCard: {
                holderName: donationDTO.paymentDataForm.cardName,
                number: donationDTO.paymentDataForm.cardNumber,
                expiryMonth: donationDTO.paymentDataForm.expiryMonth.toString(),
                expiryYear: donationDTO.paymentDataForm.expiryYear.toString(),
                ccv: donationDTO.paymentDataForm.cvv
            },
            creditCardHolderInfo: {
                name: donationDTO.userDataForm.name,
                email: donationDTO.userDataForm.email,
                cpfCnpj: donationDTO.paymentDataForm.cpf,
                postalCode: donationDTO.userDataForm.cep.toString(),
                addressNumber: donationDTO.userDataForm.streetNumber,
                addressComplement: donationDTO.userDataForm.addressComplement,
                phone: donationDTO.userDataForm.phone,
                mobilePhone: donationDTO.userDataForm.phone
            }
        };
    }

}
