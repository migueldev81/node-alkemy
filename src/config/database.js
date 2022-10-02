import Sequelize from "sequelize";
import { config } from "dotenv";
config()

export const sequelize = new Sequelize(process.env.DATABASE_URL, {

   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false
      }
   }
}
);

sequelize
   .authenticate()
   .then(() => {
      console.log('Connection has been established successfully.');
   })
   .catch(err => {
      console.error('Unable to connect to the database:', err);
   });