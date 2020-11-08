import {
    IBilling,
    IBillingCreationData,
    IClient,
    IClientCreationData,
    ISubscription,
    ISubscriptionCreationData
} from "../../IPaymentIntegration";

// region CLIENT

export interface IAsaasClientDTO {
    object: string;
    hasMore: boolean;
    totalCount: number;
    limit: number;
    offset: number;
    data: IAsaasClient[]
}

export interface IAsaasClient extends IClient {
    object: string;
    id: string;
    dateCreated: Date;
    name: string;
    email: string;
    cpfCnpj: string;
    phone: string;
    mobilePhone: string;
    address: string;
    addressNumber: string;
    complement: string;
    province: string;
    postalCode: string;
    city: string;
    deleted: boolean;
    additionalEmails: string;
    externalReference: string;
    notificationDisabled: boolean;
    groups: IAsaasClientGroup[];
}

export interface IAsaasClientGroup { name: string }

export interface IAsaasClientCreationData extends IClientCreationData {
    name: string;
    cpfCnpj: string;
    email?: string;
    phone?: string;
    mobilePhone?: string;
    postalCode?: string;
    address?: string;
    addressNumber?: string;
    complement?: string;
    province?: string;
    externalReference?: string;
    notificationDisabled?: boolean;
    additionalEmails?: string;
    municipalInscription?: string;
    stateInscription?: string;
    observations?: string;
}

// endregion

// region CREDIT CARD
export interface IAsaasCreditCardData {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
}

export interface IAsaasCreditCardHolderData {
    name: string;
    email: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    addressComplement: string;
    phone: string;
    mobilePhone: string;
}

// endregion

// region SUBSCRIPTION

export interface IAsaasSubscriptionCreationData extends ISubscriptionCreationData {
    customer: string;
    billingType: string;
    value: number;
    nextDueDate: string;
    cycle: string;
    description: string;
    creditCard: IAsaasCreditCardData;
    creditCardHolderInfo: IAsaasCreditCardHolderData;
    externalReference: string;
}

export interface IAssasSubscription extends ISubscription {
    object: string;
    id: string;
    dateCreated: string;
    customer: string;
    billingType: string;
    cycle: string;
    value: number;
    nextDueDate: string;
    description: string;
    status: string;
    discount: { value: number; dueDateLimitDays: number; },
    fine: { value: number; },
    interest: { value: number; },
    deleted: boolean;
}

// endregion

// region BILLING
export interface IAsaasBillingCreationData extends IBillingCreationData {
    customer: string;
    billingType: string;
    value: number;
    dueDate: string;
    description: string;
    externalReference: string;

    creditCard: IAsaasCreditCardData;
    creditCardHolderInfo: IAsaasCreditCardHolderData;
}

export interface IAsaasBilling extends IBilling {
    object: string;
    id: string;
    dateCreated: string;
    customer: string;
    dueDate: string;
    value: number;
    netValue: number;
    billingType: string;
    status: string;
    description: string;
    externalReference: string;
    confirmedDate: string;
    originalValue: number;
    interestValue: number;
    originalDueDate: string;
    paymentDate: string;
    clientPaymentDate: string;
    invoiceUrl: string;
    bankSlipUrl: string;
    invoiceNumber: string;
    deleted: boolean;
    postalService: boolean;
    anticipated: boolean;
    creditCard: {
        creditCardNumber: string;
        creditCardBrand: string;
        creditCardToken: string;
    }
}
// endregion
