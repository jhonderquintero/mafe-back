import express from 'express'
import { reviewController } from '../controllers/review.controller'

export const reviewsRoutes = express.Router()

// POST request to add a review
reviewsRoutes.post('/', reviewController.postReview)

// PUT request to update a review
reviewsRoutes.put('/:reviewId', reviewController.updateReview)

// DELETE request to delete a review
reviewsRoutes.delete('/:reviewId', reviewController.deleteReview)

// GET request to get reviews by service ID
reviewsRoutes.get('/service/:serviceId', reviewController.getReviewsByService)