/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../models'
import { Request, Response } from 'express'

const Hiring = db.hiring

export const hiringController = {
  // Create a new hiring request
  createHiring: async (req: Request, res: Response) => {
    try {
      const newHiring = new Hiring({
        ...req.body, // Assumes service, customer, provider, and other details are provided in the body
        status: 'Requested' // Default status
      })
      await newHiring.save()
      res.status(201).json(newHiring)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Update a hiring request
  updateHiring: async (req: Request, res: Response) => {
    try {
      const updatedHiring = await Hiring.findByIdAndUpdate(req.params.hiringId, req.body, { new: true })
      if (!updatedHiring) {
        return res.status(404).json({ message: 'Hiring not found' })
      }
      res.json(updatedHiring)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Get a specific hiring request by ID
  getHiringById: async (req: Request, res: Response) => {
    try {
      const hiring = await Hiring.findById(req.params.hiringId)
      if (!hiring) {
        return res.status(404).json({ message: 'Hiring not found' })
      }
      res.json(hiring)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // List all hiring requests for a specific service
  getHiringsByService: async (req: Request, res: Response) => {
    try {
      const hirings = await Hiring.find({ service: req.params.serviceId })
      res.json(hirings)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}
