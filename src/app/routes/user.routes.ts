import { userController } from 'app/controllers/user.controller'
import express from 'express'

// const userController = require('../controllers/user.controller.js')
export const router = express.Router()

// POST request for creating a User.
router.post('/register', userController.register)

// POST request for User login.
// router.post('/login', userController.login)

// // GET request for a specific User by ID.
// router.get('/:userId', userController.getUserById)

// // PUT request to update a specific User by ID.
// router.put('/:userId', userController.updateUser)

// // DELETE request to delete a specific User by ID.
// router.delete('/:userId', userController.deleteUser)

// // POST request for initiating password reset process.
// router.post('/forgot-password', userController.forgotPassword)
