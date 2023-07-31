const Loader = require('./loaders/index');
const mongoose = require('mongoose');

async function main() {
  const { app } = await Loader();

  const server = app.listen(process.env.PORT, () => {
    console.log('Express server listening on port: ' + process.env.PORT);
  });
  
  process.on('SIGINT',async function() {
    await mongoose.connection.close();
    server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
    });
    console.log("Mongoose connection closed");
  });
  
}

main();
