import {JWTAuthenticationController} from "./JWTAuthenticationController";
import {JWTAuthenticationUseCase} from "./JWTAuthenticationUseCase";
import {userRepoMySQl} from "../RetrieveStudent";

const jwtAuthUseCase = new JWTAuthenticationUseCase(userRepoMySQl);//(userRepoMySQl, studentMapper);
const jwtAuthController = new JWTAuthenticationController(jwtAuthUseCase);

export { jwtAuthUseCase, jwtAuthController };
