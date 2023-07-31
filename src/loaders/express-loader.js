const express = require('express');
const cors =  require('cors');
require('dotenv').config();

module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(cors());
  
  return app;
};
