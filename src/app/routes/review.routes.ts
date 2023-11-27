import express from 'express'
import { reviewController } from '../controllers/review.controller'
const router = express.Router()

// POST request to add a review
router.post('/', reviewController.postReview)

// PUT request to update a review
router.put('/:reviewId', reviewController.updateReview)

// DELETE request to delete a review
router.delete('/:reviewId', reviewController.deleteReview)

// GET request to get reviews by service ID
router.get('/service/:serviceId', reviewController.getReviewsByService)

module.exports = router
