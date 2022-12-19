import { Sequelize } from "sequelize";

const db = new Sequelize('agridb', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
});

export default db;