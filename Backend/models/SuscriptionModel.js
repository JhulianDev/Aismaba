import { DataTypes } from "sequelize"
import { database } from "../database/database.js";

const SuscriptionModel = database.define("suscription", {
  user_name: { type: DataTypes.STRING, field: 'user_name', allowNull: false },
  email: { type: DataTypes.STRING, field: 'email', allowNull: false },
  country: { type: DataTypes.STRING, field: 'country', allowNull: false }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

export default SuscriptionModel;