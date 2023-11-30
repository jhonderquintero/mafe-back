import mongoose, { Schema } from 'mongoose'

export interface IImage {
  url: string
  publicId: string
  alt: string | undefined
}

// const schema: Schema = new mongoose.Schema({
//   service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
//   imagePath: String,
//   publicId: String,
//   uploadedAt: { type: Date, default: Date.now },
//   alt: String
// })

// export const imageModel = mongoose.model<IImageModel>('Image', schema)
