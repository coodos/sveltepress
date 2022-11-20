import { DataTypes, Sequelize } from "sequelize";

export const userModel = (db: Sequelize) => {
    db.define("User", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
