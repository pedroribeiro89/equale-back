import {Request, Response} from "express";
import {JWTAuthenticationUseCase} from "./JWTAuthenticationUseCase";

export class JWTAuthenticationController {
    constructor(private useCase: JWTAuthenticationUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password }  = request.body;

        if (!email || !password) {
            return response.status(401).json({ message: 'Email ou senha inválidos' });
        }
        try {
            const token = await this.useCase.execute(email, password);
            if (!token) { return response.status(401).json({ message: 'Email ou senha inválidos' }); }
            return response.status(201).json(token).send();
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.' });
        }
    }
}
