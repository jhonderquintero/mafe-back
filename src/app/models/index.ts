import { dbConfig } from '../config/db.config'

import mongoose, { Model } from 'mongoose'
import { IReviewModel, ReviewModel } from './review.model'
import { IUserModel, userModel } from './user.model'
import { IHiringModel, hiringModel } from './hiring.model'
import { IServiceModel, serviceModel } from './service.model'
import { IImageModel, imageModel } from './image.model'

mongoose.Promise = global.Promise

interface IDatabaseConfig {
  url: string
  reviews: Model<IReviewModel>
  users: Model<IUserModel>
  hiring: Model<IHiringModel>
  services: Model<IServiceModel>
  images: Model<IImageModel>
}

export const db: IDatabaseConfig = {
  url: dbConfig.url!,
  reviews: ReviewModel,
  users: userModel,
  hiring: hiringModel,
  services: serviceModel,
  images: imageModel
}
