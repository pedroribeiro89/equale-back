import {IBaseRepository} from "./IBaseRepository";
import {Donation} from "../models/donation.model";
import {User} from "../models/user.model";

export interface IDonationRepository extends IBaseRepository<Donation> {
    createSubscription(subscription: Donation, user: User): Promise<Donation>
    createDonation(billing: Donation, user: User): Promise<Donation>
}
