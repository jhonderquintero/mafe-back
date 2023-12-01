/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { db } from '../models'
import { Types } from 'mongoose'
import { v2 as cloudinary } from 'cloudinary'
import { cloudinaryConfig } from '../config/cloudinary.config'

const Service = db.services

cloudinary.config(cloudinaryConfig)

export const serviceController = {
  // Create a new service
  createService: async (req: Request, res: Response) => {
    try {
      req.body.cost = Number(req.body.cost);
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: 'images',
        public_id: req.body.publicId,
    })

    req.body.image = "";

      const newService = new Service({ ...req.body })
      newService.image = result.url;
      await newService.save()
      console.log(newService);
      // res.status(201).json(newService)
      res.status(201).json(newService._id)
    } catch (error: any) {
      console.log(error);
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
      // Find services with the constructed query
      const services = await Service.find()
      res.json(services)
      console.log(services);
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Get a single service by ID
  getServiceById: async (req: Request, res: Response) => {
    try {
      const serviceId = new Types.ObjectId(req.params.serviceId)
      const service = await Service.aggregate([
        {
          $match: {
            _id: serviceId,
          }
        },
        {
          $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "service",
            as: "serviceReviews"
          }
        },
        {
          $project: {
            _id: 1,
            name: 1,
            description: 1,
            cost: 1,
            category: 1,
            classType: 1,
            rating: 1,
            published: 1,
            user: 1,
            serviceReviews: 1
          }
        }
      ])
      if (!service) {
        return res.status(404).json({ message: 'Service not found' })
      }
      res.json(service.at(0))
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  getServicesByEmail: async (req: Request, res: Response) => {
    try {
      const services = await Service.find({ userEmail: req.params.email })
      if (!services) {
        res.status(404).json({ message: 'Service not found' })
      } else {
        res.json(services)
      }
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