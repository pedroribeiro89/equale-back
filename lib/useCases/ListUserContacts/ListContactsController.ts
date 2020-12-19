import {Request, Response} from "express";
import {ListContactsUseCase} from "./ListContactsUseCase";

export class ListContactsController {
    constructor(private useCase: ListContactsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id }  = request.params;

        try {
            const contacts = await this.useCase.execute(+id);
            return response.status(201).json(contacts).send();
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.' });
        }
    }
}
