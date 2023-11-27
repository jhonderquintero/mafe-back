import express from 'express'
import { serviceController } from '../controllers/service.controller'
const router = express.Router()

// POST request to create a new service
router.post('/', serviceController.createService)

// PUT request to update an existing service
router.put('/:serviceId', serviceController.updateService)

// GET request to list all services with optional filters
router.get('/', serviceController.listServices)

// GET request to retrieve a single service by ID
router.get('/:serviceId', serviceController.getServiceById)

// DELETE request to delete a service
router.delete('/:serviceId', serviceController.deleteService)

module.exports = router
