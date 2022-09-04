//import dependecies
import express from "express";
import morgan from "morgan";

//import routes
import CharacterRoutes from '../routes/CharacterRoutes.js'
import MovieRoutes from '../routes/MovieRoutes.js'
import GenderRoutes from '../routes/GenderRoutes.js'
import UserRoutes from '../routes/UserRoutes.js'
import IndexRoutes from '../routes/IndexRoutes.js'

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/v1/", IndexRoutes);
app.use("/api/v1/characters", CharacterRoutes);
app.use("/api/v1/movies", MovieRoutes);
app.use("/api/v1/genders", GenderRoutes);
app.use("/api/v1/auth", UserRoutes);

export default app;