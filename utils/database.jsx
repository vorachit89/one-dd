import Mongoose  from "mongoose";

export const connectDB = async () => {
    try {
        await Mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: 'user'
        })
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error)
    }
}