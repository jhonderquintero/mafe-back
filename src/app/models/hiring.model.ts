import mongoose, { Schema } from 'mongoose'

export interface IHiringModel {
  service: mongoose.Types.ObjectId
  status: string | undefined
  contactPhone: string
  contactEmail: string
  contactSchedule: string
  messageToProvider: string
}

const schema: Schema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  status: { type: String, enum: ['Requested', 'Accepted', 'Finished', 'Cancelled'], default: 'Requested' },
  contactPhone: String,
  contactEmail: String,
  contactSchedule: String,
  messageToProvider: String 
})

export const hiringModel = mongoose.model<IHiringModel>('Hiring', schema)
