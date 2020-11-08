import  {Model, DataTypes, InitOptions, ModelAttributes} from "sequelize";
import {database} from "../config/database";
import {Course} from "./course.model";
import {User} from "./user.model";

export class Donation extends Model {
    public id!: number;
    public value: number;
    public subscription: boolean;
    public userId: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

const donationModelAttributes: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subscription: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
};

const donationInitOptions: InitOptions = {
    tableName: "donation",
    sequelize: database
};

Donation.init(donationModelAttributes, donationInitOptions);
Donation.belongsTo(User);
