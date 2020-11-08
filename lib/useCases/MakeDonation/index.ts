import {DonationController} from "./DonationController";
import {DonationUseCase} from "./DonationUseCase";
import {AsaasPaymentIntegration} from "../../integrations/implementations/Asaas/AsaasPaymentIntegration";
import {AsaasDataMapper} from "../../integrations/implementations/Asaas/AsaasDataMapper";
import {userRepoMySQl} from "../RetrieveStudent";
import {SupporterMapper} from "./SupporterMapper";
import {DonationRepositoryMySQL} from "../../repositories/implementations/DonationRepositoryMySQL";
import {DonationMapper} from "./DonationMapper";

const donationRepoMySQL = new DonationRepositoryMySQL();
const paymentIntegration = new AsaasPaymentIntegration();

const asaasDataMapper = new AsaasDataMapper();
const supporterMapper = new SupporterMapper();
const donationMapper = new DonationMapper();

const donationUseCase = new DonationUseCase(
    paymentIntegration,
    asaasDataMapper,
    userRepoMySQl,
    supporterMapper,
    donationRepoMySQL,
    donationMapper);
const donationController = new DonationController(donationUseCase);

export { donationUseCase, donationController };
