/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authConfig } from '../config/auth.config'
import { sendEmail } from './sendEmail.controller'
import { Request, Response } from 'express'
import crypto from 'crypto'

const User = db.users

const userController = {
  // Register a new user
  register: async (req: Request, res: Response) => {
    try {
      // Encrypt the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      // Create a new user
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword,
        role: req.body.role,
        title: req.body.title,
        experience: req.body.experience
      })

      // Save the user in the database
      await user.save()

      res.status(201).json(user)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },
    
  login: async (req: Request, res: Response) => {
    try {
      // Find user by email
      const user = await User.findOne({ email: req.body.email })
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' })
      }

      // Check if the password is correct
      const isMatch = await bcrypt.compare(req.body.password, user.password)
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' })
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, authConfig.jwtSecret, { expiresIn: '1h' })

      res.status(200).json({ ...user.toObject(), token })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // // Get a user by ID
  getUserById: async (req: Request, res: Response) => {
    try {
      const user = await User.findById(req.params.userId)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      res.json(user)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // // Update a user
  updateUser: async (req: Request, res: Response) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
      res.json(updatedUser)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // // Delete a user
  deleteUser: async (req: Request, res: Response) => {
    try {
      await User.findByIdAndDelete(req.params.userId)
      res.json({ message: 'User deleted successfully' })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // findUserByEmail: async (req: Request, res: Response) => {
  //   try {
  //     // Find the user by email
  //     const user = await User.findOne({ email: req.body.email })
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' })
  //     }
  //   } catch (error: any) {
  //     res.status(500).json({ message: error.message })
  //   }
  // },

  // // Forgot password
//   forgotPassword: async (req: Request, res: Response) => {
//     try {
//       // Find the user by email
//       const user = await User.findOne({ email: req.body.email })
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' })
//       }

//       // Generate a reset token
//       const resetToken = crypto.randomBytes(4).toString('hex')

//       // TODO: add token to user and a way to verify it.

//       // Send email with reset URL (implement this function based on your email service)
//       await sendEmail(user.email, 'Password Reset Request', resetToken)

//       res.status(200).json({ message: 'Password reset email sent.' })
//     } catch (error: any) {
//       res.status(500).json({ message: error.message })
//     }
//   }
}

export { userController }
