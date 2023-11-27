import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { userRoutes } from './app/routes/user.routes'
import { db } from './app/models'
import mongoose from 'mongoose'

const app: Express = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose
  .connect(db.url, {
    ssl: true
  })
  .then(() => {
    console.log('Connected to the database!')
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err)
    process.exit()
  })

app.get('/', (req, res) => {
  res.status(200).send('Server is running.')
})

app.use('/api/users', userRoutes)

app.listen(8080, async () => {
  console.log('Server is running at http://localhost:8080')
})
