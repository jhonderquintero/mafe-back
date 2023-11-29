import { userController } from '../controllers/user.controller'
import express from 'express'

// const userController = require('../controllers/user.controller.js')
export const userRoutes = express.Router()

// POST request for creating a User.
userRoutes.post('/', userController.register)

// POST request for User login.
userRoutes.post('/login', userController.login)

// // GET request for a specific User by ID.
userRoutes.get('/:email', userController.getUserByEmail)

// // PUT request to update a specific User by ID.
userRoutes.put('/:userId', userController.updateUser)

// // DELETE request to delete a specific User by ID.
userRoutes.delete('/:userId', userController.deleteUser)

// // POST request for initiating password reset process.
// userRoutes.post('/forgot-password', userController.forgotPassword)
