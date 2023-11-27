import mongoose, { Schema } from 'mongoose'

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

export const hiringModel = mongoose.model('Hiring', schema)
