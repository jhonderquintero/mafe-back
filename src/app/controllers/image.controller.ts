import { v2 as cloudinary } from 'cloudinary'
import { Request, Response } from 'express'
import { cloudinaryConfig } from '../config/cloudinary.config'
import { db } from '../models'

cloudinary.config(cloudinaryConfig)

const Services = db.services

export const imageController = {
    uploadImage: async (req: Request, res: Response) => {
        try {
            const serviceId = req.body.service;
            const service = await Services.findById(serviceId);
            console.log(service)
            if (!service) {
                res.status(404).json({ message: 'Service not found' })
            } else {
                const result = await cloudinary.uploader.upload(req.body.imagePath, {
                    folder: 'images',
                    public_id: req.body.publicId,
                })
                service.image ={
                    url: result.url,
                    alt: result.alt,
                    publicId: result.public_id
                }
                service.save()
                res.json(result)
            }
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            })
        }
    },
}