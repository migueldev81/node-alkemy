import express from "express";
import morgan from "morgan";
//Import routes
import CharacterRoutes from '../routes/CharacterRoutes.js'
import MovieRoutes from '../routes/MovieRoutes.js'
import GenderRoutes from '../routes/GenderRoutes.js'
import UserRoutes from '../routes/UserRoutes.js'
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/characters", CharacterRoutes);
app.use("/api/movies", MovieRoutes);
app.use("/api/genders", GenderRoutes);
app.use("/api/auth", UserRoutes);

export default app;