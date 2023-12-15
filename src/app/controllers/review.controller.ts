/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../models'
import { Request, Response } from 'express'


const Review = db.reviews
const Service = db.services

export const reviewController = {
  // Post a review
  postReview: async (req: Request, res: Response) => {
    try {
      const newReview = new Review({
        text: req.body.text,
        rating: req.body.rating,
        service: req.body.service,
        name: req.body.name,
        published: req.body.published,
        postedAt: new Date()
      })
      await newReview.save()
      res.status(201).json(newReview)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Edit a review
  updateReview: async (req: Request, res: Response) => {
    try {
      console.log(req.body.published)
      const updatedReview = await Review.findByIdAndUpdate(req.params.reviewId, { ...req.body} , { new: true })
      if (!updatedReview) {
        return res.status(404).json({ message: 'Review not found' })
      }
      res.json(updatedReview)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Delete a review
  deleteReview: async (req: Request, res: Response) => {
    try {
      const review = await Review.findByIdAndDelete(req.params.reviewId)
      if (!review) {
        return res.status(404).json({ message: 'Review not found' })
      }
      res.json({ message: 'Review deleted successfully' })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  // Get all reviews for a specific service
  getReviewsByService: async (req: Request, res: Response) => {
    try {
      const serviceId = req.params.serviceId;
      const reviews = await Review.find({ service: serviceId });      
      res.json(reviews)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  },

  getReviewsByEmail: async (req: Request, res: Response) => {
    try {
      const services = await Service.find({ userEmail: req.params.email });
      const reviews = await Review.find({ service: {$in: services}})
      res.json(reviews)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}
