import mongoose from "mongoose";
let catched =global.mongoose
if(!catched){
    catched=global.mongoose={ conn:null,promise:null}
}
async function connectDB(params) {
    if (catched.conn) {
        return catched.conn
    }
    if(!catched.promise){
        const opts={
            bufferCommands:false
        }
        cached.promise=mongoose.connect('${process.env.MONGODB_URI}/quickcart',opts).then(mongoose =>{
            return mongoose
        })
    }
    cached.conn=await caced.promise
    return cached.conn
}
export default connectDB