import { Request, Response } from "express";
import {DonationUseCase} from "./DonationUseCase";

export class DonationController {
    constructor(private useCase: DonationUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.useCase.execute({
                paymentDataForm: JSON.parse(request.body.paymentDataForm),
                userDataForm: JSON.parse(request.body.userDataForm)
            });
            return response.status(201).send({});
        } catch (err) {
            return response.status(400).json({
                status: 400,
                message: err.message || 'Unexpected error.'
            });
        }
    }
}
