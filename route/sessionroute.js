const express=require("express");
const {createSession,fetchsessiondata,fetchsessionByEventId,deleteSession,Editsession}=require("../controller/Sessioncontroller");

const router=express.Router();

 router.post("/",createSession);
 router.get("/sessionfetch",fetchsessiondata);
 router.get("/sessionById/:eventId",fetchsessionByEventId);

 router.post("/delete/:id",deleteSession);
 router.post("/editsession/:id",Editsession);
//  router.get ('/edit/:id',getSessionById)


  module.exports=router;