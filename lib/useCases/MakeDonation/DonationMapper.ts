import {BaseDTO, DataMapper} from "../DataMapper";
import {IDonationDTO} from "./DonationDTO";
import {Donation} from "../../models/donation.model";

export class DonationMapper implements DataMapper<Donation> {
    toDTO(data: Donation): BaseDTO {
        return undefined;
    }

    toDomain(json: IDonationDTO): Donation {
        return Donation.build({
            value: json.paymentDataForm.donation,
            subscription: json.paymentDataForm.subscription
        });
    }

    toPersistence(data: Donation): any {
    }
}
