import { Request, Response } from "express";
import { RetrieveStudentUseCase } from "./RetrieveStudentUseCase";

export class RetrieveStudentController {
    constructor(private useCase: RetrieveStudentUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id }  = request.params;

        try {
            const student = await this.useCase.execute(id ? +id : null);
            return response.status(201).json(student).send();
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.' });
        }
    }
}
