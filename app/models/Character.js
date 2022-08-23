import { DataTypes } from "sequelize";
import { sequelize } from '../config/database.js'

export const Character = sequelize.define(
    "character",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        weight: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING,
        },
        history: {
            type:
                DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);