import { DataTypes } from "sequelize"
import { database } from "../database/database.js";

const OrderModel = database.define("orders", {
    id: { type: DataTypes.STRING, field: 'id', allowNull: false, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, field: 'user_id', allowNull: false },
    products: { type: DataTypes.JSON, field: 'products', allowNull: false },
    currency: { type: DataTypes.STRING, field: 'currency', allowNull: false },
    total: { type: DataTypes.STRING, field: 'total', allowNull: false }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

export default OrderModel;