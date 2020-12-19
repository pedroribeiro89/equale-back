import {IContactsRepository} from "../IContactsRepository";
import {database} from "../../config/database";
import {QueryTypes} from "sequelize";
import {Hat} from "../../models/user.model";

export class ContactsRepositoryMySQL implements IContactsRepository<any[]> {
    async listByMessages(userId: number): Promise<any[]> {
        return await database.query<any[]>(`
            SELECT 
                sender.id as id,
                sender.email as email,
                (
                    SELECT COUNT(*) 
                    FROM message as aux 
                    WHERE aux.userSender = sender.id AND aux.userReceiver = ${userId} AND aux.received = 0
                ) as pending
            FROM
                message
                JOIN users as sender on sender.id = message.userSender
            WHERE
                message.userReceiver = ${userId}
            GROUP BY
                sender.id
        `, { type: QueryTypes.SELECT });
    }

    async listByStudents(userId: number): Promise<any[]> {
        return await database.query<any[]>(`
            SELECT
                student.id,
                student.email,
                (
                    SELECT COUNT(*)
                    FROM message
                    WHERE userSender = student.id AND userReceiver = ${userId} AND received = 0
                ) as pending
            FROM
                users as student
            WHERE
               student.type = ${Hat.student}
            ORDER BY
               pending DESC
        `, { type: QueryTypes.SELECT });
    }

}
