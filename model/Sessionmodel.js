const mongoose=require("mongoose");

const sessionSchema=new mongoose.Schema({
    event_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event', // Reference to the Event model
        required: true 
    },
    title:{type:String,required:true},
    start_time:{type:Date,required:true},
    end_time:{type:Date,required:true},
    created_at:{type:Date,default:Date.now(),required:true},
    updated_at:{type:Date,default:Date.now(),required:true},
    speakers_name:{type:String,required:true,required:true},

});
const Session=mongoose.model('session',sessionSchema);
module.exports=Session;
