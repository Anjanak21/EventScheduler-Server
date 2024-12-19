const express = require("express");
const { createEvent, fetchTabledata, fetchEventsById ,deleteEvent,editEvent} = require("../controller/authController");
const router = express.Router();

// POST: Create a new event
router.post("/", createEvent);
router.get("/",fetchTabledata)
router.get("/:id",fetchEventsById)
router.post('/:id',deleteEvent);
router.post("/update/:id",editEvent);




module.exports = router;
