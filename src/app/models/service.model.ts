import mongoose, { Schema } from 'mongoose'

const IImage: Schema = new mongoose.Schema ({
  url: String,
  publicId: String
})

export interface IServiceModel {
  name: string
  description: string
  duration: string
  frequency: string
  cost: number
  category: string
  classType: string
  rating: number
  image: string
  location: string
  promotion: string
  type: number  
  published: boolean
  userEmail: string
  userName: string
}

const schema: Schema = new mongoose.Schema({
  name: String,
  description: String,
  duration: String,
  frequency: String,
  cost: Number,
  category: String,
  classType: String,
  rating: Number,
  image: String,
  // image: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
  location: String,
  promotion: String,
  type: { type: Number, enum: [0, 1, 2]},
  published: { type: Boolean, default: true },
  userEmail: String,
  userName: String
})

export const serviceModel = mongoose.model<IServiceModel>('Service', schema)