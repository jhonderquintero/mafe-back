import { Schema, model } from 'mongoose'

export interface IUserModel {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
  title: string
  experience: string
}

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String,
  title: String,
  experience: String
})

export const userModel = model<IUserModel>('User', schema)
