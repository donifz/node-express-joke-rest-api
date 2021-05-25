import mongoose from "mongoose";

const Jokes = mongoose.Schema({
    name:{type:Number, required:true},
    joke:{type:String, required:true}
})

export default mongoose.model('Jokes', Jokes)