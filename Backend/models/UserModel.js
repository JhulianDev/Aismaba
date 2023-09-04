import { DataTypes } from "sequelize"
import { database } from "../database/database.js";

const UserModel = database.define("users", {
    user_name: { type: DataTypes.STRING, field: 'user_name', allowNull: false },
    email: { type: DataTypes.STRING, field: 'email', allowNull: false },
    password: { type: DataTypes.STRING, field: 'password', allowNull: false },
    country: { type: DataTypes.STRING, field: 'country', allowNull: false },
    is_admin: { type: DataTypes.BOOLEAN, field: 'is_admin', allowNull: false }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

export default UserModel;