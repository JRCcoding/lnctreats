import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import path from 'path'
import colors from 'colors'
import cors from 'cors'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jrciop@gmail.com',
    pass: 'yzzq zhuy orna plup',
  },
})
const router = express.Router()

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send')
  }
})
router.post('/contact', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const mail = {
    from: name,
    to: 'jrciop@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' })
    } else {
      res.json({ status: 'Message Sent' })
    }
  })
})

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

app.use('/api/products', productRoutes)
app.use('/contacts', contactRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT || 10000

app.listen(
  PORT,

  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
  )
)
