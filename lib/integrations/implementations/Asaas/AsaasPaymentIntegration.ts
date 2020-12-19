import {
    IBilling, IBillingCreationData,
    IClient,
    IPaymentIntegration,
    ISubscription,
    ISubscriptionCreationData
} from "../../IPaymentIntegration";
import {
    IAsaasBilling,
    IAsaasClient,
    IAsaasClientCreationData,
    IAsaasClientDTO,
    IAssasSubscription
} from "./AsaasModels";
import axios, {AxiosError, AxiosResponse} from 'axios';

export class AsaasPaymentIntegration implements IPaymentIntegration {

    private axiosInstance = axios.create({
        baseURL: `${process.env.ASAAS_API}/api/v3`,
        timeout: 1000,
        headers: {'access_token': process.env.ASAAS_API_KEY}
    });

    async createClient(client: IAsaasClientCreationData): Promise<IAsaasClient> {
        try {
            const response = await this.axiosInstance.post<IAsaasClient>(`/customers`, {...client});
            return response.data;
        } catch (e) { throw e; }
    }

    async findByCpfCnpj(cpfCnpj: string): Promise<IAsaasClient> {
        try {
            const response = await this.axiosInstance.get<IAsaasClientDTO>(`/customers`, {params: {cpfCnpj}});
            return response.data.data.length === 0 ? null : response.data.data[0];
        } catch (e) { throw e; }
    }

    async createSubscription(subscription: ISubscriptionCreationData): Promise<IAssasSubscription> {
        try {
            const response = await this.axiosInstance.post<IAssasSubscription>(`/subscriptions`, {...subscription, remoteIp: '10.10.10.10'});
            return response.data;
        } catch (e) {
            console.log(e.message);
            console.log(e.response.data);
            console.log(e.response.status);

            e.message = e.response.data.errors
                .map(e => e.description.toString())
                .join(' ');
            throw e;
        }
    }

    async createBilling(billing: IBillingCreationData): Promise<IAsaasBilling> {
        try {
            const response = await this.axiosInstance.post<IAsaasBilling>(`/payments`, {...billing});
            return response.data;
        } catch (e) { throw e; }
    }



}
