const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  description: { type: String },
  date: { type: String, required: true },
  location: { type: String, required: true },
  created_at:{type:Date,default:Date.now(),required:true},
  updated_at:{type:Date,default:Date.now(),required:true},
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
