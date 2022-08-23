import { DataTypes } from "sequelize";
import { sequelize } from '../config/database.js'
import { Movie } from './Movie.js'
export const Gender = sequelize.define(
    "gender",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },

        image: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);
Gender.hasMany(Movie, {
    foreinkey: "genderId",
    sourceKey: "id",
});
Movie.belongsTo(Gender, { foreinkey: "genderId", targetId: "id" });