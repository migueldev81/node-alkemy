//import dependecies
import express from "express";
import morgan from "morgan";
import cors from 'cors'
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//import routes
import IndexRoutes from '../routes/IndexRoutes.js'
import CharacterRoutes from '../routes/CharacterRoutes.js'
import MovieRoutes from '../routes/MovieRoutes.js'
import GenderRoutes from '../routes/GenderRoutes.js'
import UserRoutes from '../routes/UserRoutes.js'

//config
const app = express();
const swaggerSpec = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "CHALLENGE BACKEND NodeJS",
            version: "1.0.0",
            description: "GitHub repository: [https://github.com/migueldev81/node-alkemy-challenge](https://github.com/migueldev81/node-alkemy-challenge)   " + "API URL: [https://node-challenge-migueldev81.herokuapp.com/api/v1](https://node-challenge-migueldev81.herokuapp.com/api/v1)"
        },
        servers: [
            {
                url: "https://node-challenge-migueldev81.herokuapp.com/api/v1"
            },
        ]
    },
    apis: [`${path.join(__dirname, '../routes', '*.js')}`],
}
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

//routes
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))
app.use("/api/v1", IndexRoutes);
app.use("/api/v1/characters", CharacterRoutes);
app.use("/api/v1/movies", MovieRoutes);
app.use("/api/v1/genders", GenderRoutes);
app.use("/api/v1/auth", UserRoutes);

export default app;