const routes = require('express').Router();
const TaskController = require('../controller/TaskController');

routes.get('/', TaskController.getInput);

module.exports = routes;