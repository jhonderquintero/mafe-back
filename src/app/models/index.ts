import { dbConfig } from 'app/config/db.config'

import mongoose from 'mongoose'
import { ReviewModel } from './review.model'
import { userModel } from './user.model'
import { hiringModel } from './hiring.model'
import { serviceModel } from './service.model'

mongoose.Promise = global.Promise

interface IDatabaseConfig {
  mongoose: unknown
  url: string
  reviews: unknown
  users: unknown
  tokens: unknown
  services: unknown
}

export const db: IDatabaseConfig = {
  mongoose: mongoose,
  url: dbConfig.url,
  reviews: ReviewModel,
  users: userModel,
  tokens: hiringModel,
  services: serviceModel
}
