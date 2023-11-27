/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../models'
import { Request, Response } from 'express'

const Review = db.reviews

export const reviewController = {
  // Post a review
  postReview: async (req: Request, res: Response) => {
    try {
      const newReview = new Review({
        text: req.body.text,
        rating: req.body.rating,
        name: req.body.name, // Assuming req.user is set after authentication
        service: req.body.service,
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
      const updatedReview = await Review.findByIdAndUpdate(req.params.reviewId, { text: req.body.text }, { new: true })
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
      const reviews = await Review.find({ service: req.params.serviceId })
      res.json(reviews)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}
