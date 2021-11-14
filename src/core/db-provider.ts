import { Sequelize } from "sequelize";
export class DBProvider{
    private readonly _url: string;
    private readonly _sequelize: Sequelize;
    constructor(url: string){
        this._url = url;
        this._sequelize = new Sequelize(this._url);
    }
    public async testConnection(){
        try {
            await this._sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}