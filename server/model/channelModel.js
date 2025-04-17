import mongoose from 'mongoose'
const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    membaers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required: false,
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
})

channelSchema.pre("save",function (next){
    this.updatedAt = Date.now();
    next();
})

channelSchema.pre("findOneAndUpdate",function (next){
    this.updatedAt = Date.now();
    next();
})

const Channel = mongoose.model("Message", channelSchema);

export default Channel;