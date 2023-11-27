import mongoose, { Schema } from 'mongoose'

const schema: Schema = new mongoose.Schema({
  text: String,
  rating: { type: Number, min: 1, max: 5 },
  name: String,
  postedAt: { type: Date, default: Date.now },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  hidden: { type: Boolean, default: false }
})

export const ReviewModel = mongoose.model('Review', schema)
