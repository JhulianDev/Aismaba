import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import mysql2 from 'mysql2';
dotenv.config();

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  dialectModule: mysql2
})

export const dataBaseConnection = async () => {
  try {
    await database.authenticate();
    console.log("¡The connection to the database was successful!");
  } catch (error) {
    console.log(`There was an error connecting to the database: ${error}`);
  }
}