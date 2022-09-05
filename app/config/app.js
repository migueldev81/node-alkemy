//import dependecies
import express from "express";
import morgan from "morgan";
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//import routes
import CharacterRoutes from '../routes/CharacterRoutes.js'
import MovieRoutes from '../routes/MovieRoutes.js'
import GenderRoutes from '../routes/GenderRoutes.js'
import UserRoutes from '../routes/UserRoutes.js'

//config
const app = express();
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Backend Challenge API",
            version: 1.0,

        },
        servers: [
            {
                url: "https://node-challenge-migueldev81.herokuapp.com/api/v1"
            },
            {
                url: "http://localhost:3000/api/v1"
            }
        ]
    },
    apis: [`${path.join(__dirname, '../routes', '*.js')}`],
}
//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use('/api/v1', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))
app.use("/api/v1/characters", CharacterRoutes);
app.use("/api/v1/movies", MovieRoutes);
app.use("/api/v1/genders", GenderRoutes);
app.use("/api/v1/auth", UserRoutes);

export default app;