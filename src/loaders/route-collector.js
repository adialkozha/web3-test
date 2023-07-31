const { join } = require('path');

const { readdirSync } = require('fs');

async function collector(app) {
  try {
    const base = join(__dirname, '../router');
    const controllers = readdirSync(base);

    for (const controller of controllers) {
      const path = join(base, controller);
      app.use(require(path));
    }
  } catch (err) {
    process.exit(1);
  }
}

module.exports = collector;
