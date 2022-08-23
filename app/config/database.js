import Sequelize from "sequelize";
import database from '../../config.js'

export const sequelize = new Sequelize(
   database.database.database,
   database.database.username,
   database.database.password, {
   host: database.database.host,
   dialect: "mysql"
}
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});