import {Request, Response} from "express";
import {SendMessageUseCase} from "./SendMessageUseCase";

export class SendMessageController {
    constructor(private useCase: SendMessageUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId }  = request.params;
        const { receiverId, message }  = request.body;

        try {
            if (userId && receiverId && message) {
                let messageDTO = await this.useCase.execute(+userId, +receiverId, message);
                return response.status(201).json(messageDTO).send();
            } else {
                return response.status(400).json({ message: 'Sem parametros.' });
            }
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.' });
        }
    }
}
