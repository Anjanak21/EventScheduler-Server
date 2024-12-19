const Session=require("../model/Sessionmodel");
const mongoose = require('mongoose');


// const createSession=async(req,res)=>{
//     console.log(req.body);
//     const session=await Session.create(req.body)
//     res.status(200).json(session)
    
// }
const createSession = async (req, res) => {
  const { event_id, title, start_time, end_time, speakers_name} = req.body;

  console.log(req.body);

  try {
    // Ensure start_time and end_time are Date objects
    const startDate = new Date(start_time);
    const endDate = new Date(end_time);

    // Ensure no overlapping sessions for the same event
    const overlappingSession = await Session.findOne({
      event_id,
      $or: [
        { 
          start_time: { $lt: endDate }, // Session starts before new session ends
          end_time: { $gt: startDate }, // Session ends after new session starts
        }
      ],
    });

    console.log('Overlapping session:', overlappingSession);

    if (overlappingSession) {
      return res.status(400).json({ message: 'Session time conflicts with an existing session.' });
    }

    // Create a new session if no overlap
    const newSession = new Session({ event_id, title, start_time: startDate, end_time: endDate, speakers_name });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
};


const fetchsessiondata=async(req,res)=>{
    try {
         // Send the fetched data as JSON response
        const sessions= await Session.find(); // Retrieve all documents in the `Event` collection
        res.status(200).json(sessions);
        console.log(sessions);
        
         // Send the fetched data as JSON response
      } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Failed to fetch events" });
      }
    };
const fetchsessionByEventId=async(req,res)=>{
        try{
            const { eventId } = req.params;
            // console.log(eventId);
            
            const sessions = await Session.find({ event_id:eventId });
            // console.log(sessions);
            
            res.status(200).json(sessions);
            // console.log(sessions);
            
            
            


      } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Failed to fetch events" });
      
        }
    
    }
    const deleteSession = async (req, res) => {
      try {
        const { id} = req.params;
        const deletedSession = await Session.findByIdAndDelete(id);
    
        if (!deletedSession) {
          return res.status(404).json({ message: 'Session not found' });
        }
    
        res.status(200).json({ message: 'Session deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
      }
    };
const Editsession=async(req,res)=>{
      try {
        const { id } = req.params;
        console.log(req.body);
        
        const session = await Session.findByIdAndUpdate(id, req.body, { new: true });
       console.log(session);
       
        if (!session) {
          return res.status(404).json({ message: 'Session not found' });
        }
    
        res.status(200).json(session);
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
      }
    };
  // const getSessionById = async (req, res) => {
  //     try {
  //       const { sessionId } = req.params;
  //       const session = await Session.findById(sessionId);
  //       console.log(session);
  //       res.status(200).json(session);
  //     } catch (error) {
  //       res.status(500).json({ message: 'Server Error', error });
  //     }
  //   };
    
    
module.exports={createSession,fetchsessiondata,fetchsessionByEventId,deleteSession,Editsession};