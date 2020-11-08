import {IDonationRepository} from "../IDonationRepository";
import {Donation} from "../../models/donation.model";
import {User} from "../../models/user.model";

export class DonationRepositoryMySQL implements IDonationRepository {

    delete(data: Donation): Promise<any> {
        return undefined;
    }

    exists(data: Donation): Promise<boolean> {
        return undefined;
    }

    getById(id: number): Promise<Donation> {
        return undefined;
    }

    list(): Promise<Donation[]> {
        return undefined;
    }

    async save(data: Donation): Promise<Donation> {
        await data.save();
        return data
    }

    async createDonation(billing: Donation, user: User): Promise<Donation> {
        billing.userId = user.id;
        billing.subscription = false;
        return await this.save(billing);
    }

    async createSubscription(subscription: Donation, user: User): Promise<Donation> {
        subscription.userId = user.id;
        subscription.subscription = true;
        return await this.save(subscription);
    }

}
