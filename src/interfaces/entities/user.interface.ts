import { Optional, Model } from "sequelize";

interface IUserSchema{
    id: number;
    login: string;
}
interface IUserCreationAttributes extends Optional<IUserSchema, "id"> {}
export interface IUser
extends Model<IUserSchema, IUserCreationAttributes>,
  IUserSchema {}
