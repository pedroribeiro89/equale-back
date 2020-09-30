import {UsersRepositoryMySQl} from "../../repositories/implementations/UserRepositoryMySQl";
import {RetrieveStudentUseCase} from "./RetrieveStudentUseCase";
import {RetrieveStudentController} from "./RetrieveStudentController";
import {StudentMapper} from "./StudentMapper";

const userRepoMySQl = new UsersRepositoryMySQl();
const studentMapper = new StudentMapper();
const retrieveStudentUseCase = new RetrieveStudentUseCase(userRepoMySQl, studentMapper);
const retrieveStudentController = new RetrieveStudentController(retrieveStudentUseCase);


export { retrieveStudentUseCase, retrieveStudentController, studentMapper };
