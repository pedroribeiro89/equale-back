import {BaseDTO} from "../DataMapper";

export interface IDonationDTO extends BaseDTO {
    paymentDataForm: IPaymentDataFormDTO;
    userDataForm: IUserDataFormDTO;
}

export interface IPaymentDataFormDTO extends BaseDTO {
    cardName: string;
    cardNumber: string;
    expiryMonth: number;
    expiryYear: number;
    cvv: string;
    donation: number;
    subscription: boolean;
    cpf: string;
}

export interface IUserDataFormDTO extends BaseDTO {
    name: string;
    email: string;
    phone: string;
    cep: number;
    street: string;
    streetNumber: string;
    addressComplement: string;
    city: string;
    state: string;
    password: string;
    confirmPassword: string;
}
