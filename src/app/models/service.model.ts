import mongoose, { Schema } from 'mongoose'
import { IImage } from './image.model'

export interface IServiceModel {
  name: string
  description: string
  duration: number
  frequency: string
  cost: number
  category: string
  classType: string
  rating: number
  image: IImage
  ubication: string
  promotion: string
  experience: string
  type: number
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
  rating: Number,
  image: Object,
  ubication: String,
  promotion: String,
  experience: String,
  type: { type: Number, enum: [0, 1, 2]},
  published: { type: Boolean, default: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

export const serviceModel = mongoose.model<IServiceModel>('Service', schema)
