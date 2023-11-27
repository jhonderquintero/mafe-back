import mongoose, { Schema } from 'mongoose'

const schema: Schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String,
  title: String,
  experience: String
})

export const userModel = mongoose.model('User', schema)
