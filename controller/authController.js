
const Event = require("../model/Event")


const createEvent = async(req,res)=>{
    console.log(req.body);
    try{
    const event =  Event(req.body);
    await event.save();
    res.status(200).json({message:"event created",event})
    }
    catch(error){
        console.error("error in event",error);
        res.status(500).json({error:"failed"});
        
    }
    
}
 
const fetchTabledata=async(req,res)=>{
try {
     // Send the fetched data as JSON response
    const events = await Event.find(); // Retrieve all documents in the `Event` collection
    res.status(200).json(events);
     // Send the fetched data as JSON response
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};


 
const fetchEventsById=async(req,res)=>{
    try {
         // Send the fetched data as JSON response
       const eventid=req.params.id;
       const session=await Event.findById(eventid);
       console.log(session);
       
         res.status(200).json(session)
       
         // Send the fetched data as JSON response
      } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Failed to fetch events" });
      }
    };

    const deleteEvent=async(req,res)=>{
      try {
        // Send the fetched data as JSON response
      const eventid=req.params.id;
      const deletedEvent = await Event.findByIdAndDelete(eventid)
      
      
        res.status(200).json({deletedEvent})
      
        // Send the fetched data as JSON response
     } catch (error) {
       console.error("Error fetching events:", error);
       res.status(500).json({ error: "Failed to fetch events" });
     }
    }
     const editEvent=async(req,res)=>{
      // const {id}=req.params;
      const eventid=req.params.id;
      console.log(eventid);
      
      console.log("update")
      try{
        const editedEvent= await Event.findByIdAndUpdate(eventid,req.body,{new:true});
         console.log(editedEvent);
        //  if(!editedEvent) return res.status(404).json({message:"ev"})
         res.status(200).json(editedEvent);
      }
      catch(error){
        res.status(500).json({message:"server error"});
      }
      
     }

    



module.exports = {createEvent,fetchTabledata,fetchEventsById,deleteEvent,editEvent}