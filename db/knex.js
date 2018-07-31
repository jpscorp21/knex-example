const enviroment = process.env.ENVIROMENT || 'development';
const config = require('../knexfile.js')[enviroment];
module.exports = require('knex')(config);