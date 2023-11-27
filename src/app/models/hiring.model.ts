import mongoose, { Schema } from 'mongoose'

export interface IHiringModel {
  service: mongoose.Types.ObjectId
  customer: mongoose.Types.ObjectId
  provider: mongoose.Types.ObjectId
  status: string | undefined
  contactPhone: string
  contactEmail: string
  contactSchedule: string
  messageToProvider: string
}

const schema: Schema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },
  status: { type: String, enum: ['Requested', 'Accepted', 'Finished', 'Cancelled'] },
  contactPhone: String,
  contactEmail: String,
  contactSchedule: String,
  messageToProvider: String
})

export const hiringModel = mongoose.model<IHiringModel>('Hiring', schema)
