import { dbConfig } from '../config/db.config'

import mongoose, { Model } from 'mongoose'
import { IReviewModel, ReviewModel } from './review.model'
import { IHiringModel, hiringModel } from './hiring.model'
import { IServiceModel, serviceModel } from './service.model'

mongoose.Promise = global.Promise

interface IDatabaseConfig {
  url: string
  reviews: Model<IReviewModel>
  hiring: Model<IHiringModel>
  services: Model<IServiceModel>
}

export const db: IDatabaseConfig = {
  url: dbConfig.url!,
  reviews: ReviewModel,
  hiring: hiringModel,
  services: serviceModel
}
