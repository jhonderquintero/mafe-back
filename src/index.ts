import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { serviceRoutes } from './app/routes/service.routes'
import { reviewsRoutes } from './app/routes/review.routes'
import { db } from './app/models'
import mongoose from 'mongoose'
import { hiringRoutes } from './app/routes/hiring.routes'
import { imageRoutes } from './app/routes/image.routes'

const app: Express = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: '50mb'}));

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

app.use('/api/services', serviceRoutes)

app.use('/api/reviews', reviewsRoutes)

app.use('/api/hirings', hiringRoutes)

app.use('/api/images', imageRoutes)

app.listen(8080, async () => {
  console.log('Server is running at http://localhost:8080')
})
