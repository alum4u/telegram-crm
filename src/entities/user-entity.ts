import { Model, Sequelize, DataTypes, Optional } from "sequelize";
import { IUser } from "../interfaces/entities/user.interface";

export class UserModel {
    private _user: any;
    constructor(sequelize: Sequelize){
        this._user = sequelize.define<IUser>('User',{
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            login: {
                type: DataTypes.STRING,
                allowNull: false 
            },
        })
    };
    public getInstance(): any{
        return this._user;
    }
}