/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { db } from '../models'
const Service = db.services

export const serviceController = {
  // Create a new service
  createService: async (req: Request, res: Response) => {
    try {
      const newService = new Service({ ...req.body })
      await newService.save()
      res.status(201).json(newService)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Update a service
  updateService: async (req: Request, res: Response) => {
    try {
      const updatedService = await Service.findByIdAndUpdate(req.params.serviceId, { ...req.body }, { new: true })
      if (!updatedService) {
        return res.status(404).json({ message: 'Service not found' })
      }
      res.json(updatedService)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  listServices: async (req: Request, res: Response) => {
    try {
      // Extract query parameters for filtering
      const { category, classType, frequency, rating } = req.query
      const query = {
        category: category,
        classType: classType,
        frequency: frequency,
        rating: { $gte: rating }
      }

      // Find services with the constructed query
      const services = await Service.find(query)
      res.json(services)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Get a single service by ID
  getServiceById: async (req: Request, res: Response) => {
    try {
      const service = await Service.findById(req.params.serviceId)
      if (!service) {
        return res.status(404).json({ message: 'Service not found' })
      }
      res.json(service)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Delete a service
  deleteService: async (req: Request, res: Response) => {
    try {
      const service = await Service.findByIdAndDelete(req.params.serviceId)
      if (!service) {
        return res.status(404).json({ message: 'Service not found' })
      }
      res.json({ message: 'Service deleted successfully' })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}
