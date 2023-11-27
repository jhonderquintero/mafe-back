import express from 'express'
import { hiringController } from '../controllers/hiring.controller'

export const router = express.Router()

// POST request to create a new hiring
router.post('/', hiringController.createHiring)

// PUT request to update a hiring request
router.put('/:hiringId', hiringController.updateHiring)

// GET request to retrieve a specific hiring by ID
router.get('/:hiringId', hiringController.getHiringById)

// GET request to list all hirings for a specific service
router.get('/service/:serviceId', hiringController.getHiringsByService)
