import mongoose, { Schema } from 'mongoose'

export interface IReviewModel {
  text: string
  rating: number
  name: string
  postedAt: Date
  service: mongoose.Types.ObjectId
  hidden: boolean
}

const schema: Schema = new mongoose.Schema({
  text: String,
  rating: { type: Number, min: 1, max: 5 },
  name: String,
  postedAt: { type: Date, default: Date.now },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  hidden: { type: Boolean, default: false }
})

export const ReviewModel = mongoose.model<IReviewModel>('Review', schema)
