import ip from 'ip'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Like from './models/Like'
import Talk from './models/Talk'

exports.handler = async (event) => {
  try {
    if (!event.queryStringParameters || !event.queryStringParameters.id)
      throw Error('A talk id must be specified.')

    await dotenv.config()
    await mongoose.connect(process.env.MONGODB_ENDPOINT, { useNewUrlParser: true })
    console.log(`Connected to database at "${ process.env.MONGODB_ENDPOINT }".`)

    const ipAddress = ip.address()
    const like = await Like.findOne({ ip: ipAddress })

    if (like)
      throw Error('User already liked a talk.')

    await Like.create([ { ip: ipAddress, talk: event.queryStringParameters.id } ])
    await Talk.findByIdAndUpdate(event.queryStringParameters.id, { $inc: { 'likes': 1 } }).exec()
    return { statusCode: 200, body: '' }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: JSON.stringify(err) }
  }
}
