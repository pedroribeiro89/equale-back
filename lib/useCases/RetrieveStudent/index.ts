import {UsersRepositoryMySQL} from "../../repositories/implementations/UserRepositoryMySQL";
import {RetrieveStudentUseCase} from "./RetrieveStudentUseCase";
import {RetrieveStudentController} from "./RetrieveStudentController";
import {StudentMapper} from "./StudentMapper";

const userRepoMySQl = new UsersRepositoryMySQL();
const studentMapper = new StudentMapper();
const retrieveStudentUseCase = new RetrieveStudentUseCase(userRepoMySQl, studentMapper);
const retrieveStudentController = new RetrieveStudentController(retrieveStudentUseCase);


export { retrieveStudentUseCase, retrieveStudentController, studentMapper, userRepoMySQl };
