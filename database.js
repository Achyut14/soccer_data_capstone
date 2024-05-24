// database.js

const { Sequelize } = require('sequelize');

// Setting up the database connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Necessary for Heroku's SSL
    }
  },
  logging: false // Turn off logging; default is console.log
});

module.exports = sequelize;
