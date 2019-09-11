const configGlobal = require('../../config');
var config = {};

config.mongodb = {};
config.mongodb.host = configGlobal.banco.host;
config.mongodb.porta = configGlobal.banco.porta;
config.mongodb.database = configGlobal.banco.databse;
config.mongodb.username = configGlobal.banco.user;
config.mongodb.password = configGlobal.banco.pass;

module.exports = config;