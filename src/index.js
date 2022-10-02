import { config } from 'dotenv';
config();
import app from "./config/app.js";
import { sequelize } from './config/database.js'
function server() {
  app.set('port', 3000 | process.env.PORT)
  app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}.`);
  });
}
async function database() {
  await sequelize.sync({ force: false });
}
server()
database()
