import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class Course extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Course.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "course",
        sequelize: database // this bit is important
    }
);

Course.sync({ force: false }).then(() => console.log("Course table created"));

export interface Course {
    name: string;
}
