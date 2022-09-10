import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Role = sequelize.define(
    "role",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        slug: {
            type: DataTypes.STRING,
        },  
        descritpion: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);

export const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: Role, // 'Movies' would also work
                key: 'id'
            }
        },

    },
    {
        timestamps: true,
    }
);



