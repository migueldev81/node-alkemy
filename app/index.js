import { config } from 'dotenv';
config();
import app from "./config/app.js";
import { sequelize } from './config/database.js'
function server() {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}
async function database() {
  await sequelize.sync({ force: false });
}
server()
database()
