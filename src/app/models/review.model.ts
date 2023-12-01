import mongoose, { Schema } from 'mongoose'

export interface IReviewModel {
  text: string
  rating: number
  postedAt: Date
  service: mongoose.Types.ObjectId
}

const schema: Schema = new mongoose.Schema({
  text: String,
  rating: { type: Number, min: 1, max: 5 },
  postedAt: { type: Date, default: Date.now },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }
})

export const ReviewModel = mongoose.model<IReviewModel>('Review', schema)
