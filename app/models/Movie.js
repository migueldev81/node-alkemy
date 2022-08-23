import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Character } from "./Character.js"

export const Movie = sequelize.define(
    "movie",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        qual: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.STRING,
        },
        creation: {
            type:
                DataTypes.DATE,
        }
    },
    {
        timestamps: true,
    }
);
export const MovieCharacter = sequelize.define('movie_character', {
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie, // 'Movies' would also work
        key: 'id'
      }
    },
    characterId: {
      type: DataTypes.INTEGER,
      references: {
        model: Character, // 'Actors' would also work
        key: 'id'
      }
    }
  });
