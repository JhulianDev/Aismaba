import { DataTypes } from "sequelize";
import { database } from "../database/database.js";

const DolarModel = database.define("dolar", {
  id: { type: DataTypes.INTEGER, field: 'id', allowNull: false, primaryKey: true, autoIncrement: true },
  dolar_value: { type: DataTypes.INTEGER, field: 'dolar_value', allowNull: false, defaultValue: 700 }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'dolar'
});

export default DolarModel;