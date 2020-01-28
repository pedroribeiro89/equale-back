import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import {Course} from "./course.model";

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public type!: Hat;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public photo: string;
    public description: string;
    public courseId: number;

    public phone: number;
    public cep: number;
    public street: string;
    public streetNumber: number;
    public addressComplement: string;
    public city: string;
    public state: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: new DataTypes.INTEGER,
            allowNull: false
        },
        photo: { type: new DataTypes.STRING },
        description: { type: new DataTypes.STRING(1020) },
        phone: { type: new DataTypes.INTEGER },
        cep: { type: new DataTypes.INTEGER },
        street: { type: new DataTypes.STRING },
        streetNumber: { type: new DataTypes.INTEGER },
        addressComplement: { type: new DataTypes.STRING },
        city: { type: new DataTypes.STRING },
        state: { type: new DataTypes.STRING(2) }
    },
    {
        tableName: "user",
        sequelize: database // this bit is important
    }
);

User.belongsTo(Course);

User.sync({ force: false }).then(() => console.log("User table created"));

export interface UserInterface {
    name: string;
    email: string;
    type: Hat;
    photo: string;
    description: string;
    courseId: number;
    phone: number;
    cep: number;
    street: string;
    streetNumber: number;
    addressComplement: string;
    city: string;
    state: string;
}

export enum Hat {
    admin,
    student,
    supporter
}
