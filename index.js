import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import imageRoutes from './routes/imageRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1', imageRoutes)

app.use(express.static('public'))
const port = process.env.PORT

app.listen(port, (err) => {
  if (err) {
    console.log('Something went wrong')
    console.log(err)
    return
  }
  console.log(
    `Server is running on port ${port}! follow link with (cmd+click or ctrl+click) to open in browser `
      .magenta.bold + `http://localhost:${port}`.blue.underline
  )
})
