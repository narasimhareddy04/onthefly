import activitiesController from "../controllers/activities.js";
import express from "express";
const router = express.Router();
// GET requests at /activities
router.get("/activities", activitiesController.getActivities);

// GET requests at /activities/:trip_id
router.get("/activities/:trip_id", activitiesController.getTripActivities);

// POST requests at /activities/:trip_id
router.post("/activities/:trip_id", activitiesController.createActivity);

// DELETE requests at /activities/:id
router.delete("/activities/:id", activitiesController.deleteActivity);

// PATCH requests at '/activities/:id'
router.patch("/activities/:id", activitiesController.updateActivityLikes);

export default router;
