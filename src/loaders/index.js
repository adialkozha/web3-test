const routeCollertor = require('./route-collector');
const expressLoader = require('./express-loader');
const { connectDatabase } = require('../connects/mongo');

async function init() {
  const app = expressLoader();

  await routeCollertor(app);

  await connectDatabase();
  return { app };
}

module.exports = init;
