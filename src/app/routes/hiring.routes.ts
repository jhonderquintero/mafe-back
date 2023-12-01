import express from 'express'
import { hiringController } from '../controllers/hiring.controller'

export const hiringRoutes = express.Router()

// POST request to create a new hiring
hiringRoutes.post('/', hiringController.createHiring)

// PUT request to update a hiring request
hiringRoutes.put('/:hiringId', hiringController.updateHiring)

// GET request to retrieve a specific hiring by ID
hiringRoutes.get('/:hiringId', hiringController.getHiringById)

// GET request to list all hirings for a specific service
hiringRoutes.get('/service/:serviceId', hiringController.getHiringsByService)

hiringRoutes.get('/email/:email', hiringController.getHiringsByEmail)
