import express from 'express'
import { serviceController } from '../controllers/service.controller'

export const serviceRoutes = express.Router()

// POST request to create a new service
serviceRoutes.post('/', serviceController.createService)

// PUT request to update an existing service
serviceRoutes.put('/:serviceId', serviceController.updateService)

// GET request to list all services with optional filters
serviceRoutes.get('/', serviceController.listServices)

// GET request to retrieve a single service by ID
serviceRoutes.get('/:serviceId', serviceController.getServiceById)

// DELETE request to delete a service
serviceRoutes.delete('/:serviceId', serviceController.deleteService)

serviceRoutes.get('/email/:email', serviceController.getServicesByEmail)
