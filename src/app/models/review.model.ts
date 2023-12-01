import mongoose, { Schema } from 'mongoose'

export interface IReviewModel {
  text: string
  name: string
  rating: number
  postedAt: Date
  published: string | undefined
  service: mongoose.Types.ObjectId
}

const schema: Schema = new mongoose.Schema({
  text: String,
  name: String,
  rating: { type: Number, min: 1, max: 5 },
  postedAt: { type: Date, default: Date.now },
  published: { type: String, default: undefined, enum: ['published', 'unpublished', undefined] },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }
})

export const ReviewModel = mongoose.model<IReviewModel>('Review', schema)
