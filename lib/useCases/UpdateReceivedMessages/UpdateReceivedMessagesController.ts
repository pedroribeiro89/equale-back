import {Request, Response} from "express";
import {UpdateReceivedMessagesUseCase} from "./UpdateReceivedMessagesUseCase";

export class UpdateReceivedMessagesController {
    constructor(private useCase: UpdateReceivedMessagesUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId }  = request.params;
        const { receiverId }  = request.body;

        try {
            if (userId && receiverId) {
                await this.useCase.execute(+userId, +receiverId);
                return response.status(201).json().send();
            } else {
                return response.status(400).json({ message: 'Sem parametros' });
            }
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.' });
        }
    }
}
