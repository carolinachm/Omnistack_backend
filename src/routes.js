const express = require('express');


const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/Profilecontroller')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.find)
routes.post('/ongs',OngController.create)

routes.get('/profile', ProfileController.findOng)

routes.get('/incidents',IncidentController.find)
routes.post('/incidents',IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete)


module.exports = routes;