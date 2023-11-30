import mongoose, { Schema } from 'mongoose'

export interface IServiceModel {
  name: string
  description: string
  duration: number
  frequency: string
  cost: number
  category: string
  classType: string
  // provider: mongoose.Types.ObjectId | undefined
  // comments: mongoose.Types.ObjectId[]
  rating: number
  imageUrl: string
  published: boolean
  user: mongoose.Types.ObjectId
}

const schema: Schema = new mongoose.Schema({
  name: String,
  description: String,
  duration: Number,
  frequency: { type: String, enum: ['One-time', 'Weekly', 'Monthly'] },
  cost: Number,
  category: String,
  classType: { type: String, enum: ['Individual', 'Group'] },
  // provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  rating: Number,
  imageUrl: String,
  published: { type: Boolean, default: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

export const serviceModel = mongoose.model<IServiceModel>('Service', schema)
