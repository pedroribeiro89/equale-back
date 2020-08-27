import {Model, DataTypes, ModelAttributes, InitOptions} from "sequelize";
import { database } from "../config/database";
import {Course} from "./course.model";

import * as bcrypt from 'bcrypt';

export interface UserInterface {
    name: string;
    email: string;
    type: Hat;
    photo: string;
    video: string;
    description: string;
    course_id: number;
    phone: number;
    cep: number;
    street: string;
    streetNumber: number;
    addressComplement: string;
    city: string;
    state: string;
    password: string;
}

export enum Hat {
    admin = 1,
    student = 2,
    supporter = 3
}

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public type!: Hat;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;

    public photo: string;
    public video: string;
    public description: string;
    public course_id: number;

    public phone: number;
    public cep: number;
    public street: string;
    public streetNumber: number;
    public addressComplement: string;
    public city: string;
    public state: string;
    public password: string;

    public async validPassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

const userModelAttributes: ModelAttributes = {
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
    video: { type: new DataTypes.STRING },
    description: { type: new DataTypes.STRING(1020) },
    phone: { type: new DataTypes.INTEGER },
    cep: { type: new DataTypes.INTEGER },
    street: { type: new DataTypes.STRING },
    streetNumber: { type: new DataTypes.INTEGER },
    addressComplement: { type: new DataTypes.STRING },
    city: { type: new DataTypes.STRING },
    state: { type: new DataTypes.STRING(2) },
    password: { type: DataTypes.STRING, allowNull: false },
};

const userInitOptions: InitOptions = {
    tableName: "users",
    sequelize: database,
    hooks: {
        beforeCreate: (user: User) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
        }
    }
};

User.init(userModelAttributes, userInitOptions);

User.belongsTo(Course);

// User.sync({ force: false}).then(() => console.log("User table created"));


