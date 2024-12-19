// import Speaker from "../model/Speakermodel";

// const createSpeaker = async(req,res)=>{
//     console.log(req.body);
//     try{
//     const speaker =  Speaker(req.body);
//     await speaker.save();
//     res.status(200).json({message:"event created",speaker})
//     }
//     catch(error){
//         console.error("error in speaker",error);
//         res.status(500).json({error:"failed"});
        
//     }
    
// }
// module.exports=createSpeaker;