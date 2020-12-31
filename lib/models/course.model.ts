import {Model, DataTypes, ModelAttributes, InitOptions} from "sequelize";
import { database } from "../config/database";

export interface Course {
    name: string;
}

export class Course extends Model {
    public id!: number;
    public name!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

const courseModelAttributes: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING,
        allowNull: false
    }
};

const courseInitOptions: InitOptions = {
    tableName: "course",
    sequelize: database
};

Course.init(courseModelAttributes, courseInitOptions);

