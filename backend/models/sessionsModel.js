import mongoose from 'mongoose'

const sessionSchema = mongoose.Schema({
    _id: {
        type: String,
    },
    token:{
        type: String,
    }
}, {
    timestamps: true
})


const Session = mongoose.model('Session', sessionSchema)

export default Session