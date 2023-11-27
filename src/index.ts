import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app: Express = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Server is running.')
})

app.listen(8080, async () => {
  console.log('Server is running at http://localhost:8080')
})
