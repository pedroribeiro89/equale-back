import {Request, Response} from "express";
import {ListUserMessagesUseCase} from "./ListUserMessagesUseCase";

export class ListUserMessagesController {
    constructor(private useCase: ListUserMessagesUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId }  = request.params;
        const { receiverId }  = request.query;

        try {
            if (userId && receiverId) {
                const userMessages = await this.useCase.execute(+userId, +receiverId);
                return response.status(201).json(userMessages).send();
            } else {
                return response.status(400).json({ message: 'Sem parametros' });
            }
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.' });
        }
    }
}
