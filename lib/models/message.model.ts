import {DataTypes, InitOptions, Model, ModelAttributes} from "sequelize";
import {Hat, User} from "./user.model";
import {database} from "../config/database";

export class Message extends Model {
    public id!: number;
    public message!: string;
    public received!: boolean;
    public approved!: boolean;
    public userSender: number;
    public userReceiver: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

const messageModelAttributes: ModelAttributes = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    received: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    userSender: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    userReceiver: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
};

const messageInitOptions: InitOptions = {
    tableName: "message",
    sequelize: database
};

Message.init(messageModelAttributes, messageInitOptions);
Message.belongsTo(User, {foreignKey: 'userSender', targetKey: 'id', as: 'sender'});
Message.belongsTo(User, {foreignKey: 'userReceiver', targetKey: 'id', as: 'receiver'});
