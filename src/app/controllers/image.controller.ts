import { v2 as cloudinary } from 'cloudinary'
import { Request, Response } from 'express'
import { cloudinaryConfig } from '../config/cloudinary.config'
import { db } from '../models'


cloudinary.config(cloudinaryConfig)

const Images = db.images

export const imageController = {
    uploadImage: async (req: Request, res: Response) => {
        try {
            const result = await cloudinary.uploader.upload(req.body.imagePath, {
                folder: 'images',
                public_id: req.body.publicId,
            })
            const image = new Images({
                imagePath: result.url,
                publicId: result.public_id,
                service: req.body.service,
                alt: result.alt
            })
            await image.save()
            res.json(result)
        } catch (error: any) {
            return res.status(400).json({
                message: error.message,
            })
        }
    },
}