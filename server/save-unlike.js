import ip from 'ip'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Like from './models/Like'
import Talk from './models/Talk'

dotenv.config()

let connection
exports.handler = async () => {
  const context = arguments[1]
  context.callbackWaitsForEmptyEventLoop = false

  try {
    if (!connection) {
      connection = await mongoose.connect(process.env.MONGODB_ENDPOINT, {
        useNewUrlParser: true,
        bufferCommands: false,
        bufferMaxEntries: 0
      })
      console.log(`Connected to database at "${ process.env.MONGODB_ENDPOINT }".`)
    }

    const ipAddress = ip.address()
    const like = await Like.findOne({ ip: ipAddress }).populate('talk')

    if (!like)
      throw Error('User haven\'t liked any talk.')

    await Talk.findByIdAndUpdate(like.talk._id, { $inc: { 'likes': -1 } }).exec()
    await Like.deleteOne({ ip: ipAddress }).exec()
    return { statusCode: 200, body: '' }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: JSON.stringify(err) }
  }
}
