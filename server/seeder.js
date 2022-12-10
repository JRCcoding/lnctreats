import mongoose from 'mongoose'
import dotenv from 'dotenv'
import blogposts from './data/blogposts.js'
import notes from './data/notes.js'
import Note from './models/noteModel.js'
import Blog from './models/blogModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Blog.deleteMany()
    await Note.deleteMany()

    await Blog.insertMany(blogposts)
    await Note.insertMany(notes)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Blog.deleteMany()
    await Note.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
