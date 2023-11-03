import activitiesController from "../controllers/activities.js";
import express from "express";
const router = express.Router();
// GET requests at /activities
router.get("/", activitiesController.getActivities);

// GET requests at /activities/:trip_id
router.get("/:trip_id", activitiesController.getTripActivities);

// POST requests at /activities/:trip_id
router.post("/:trip_id", activitiesController.createActivity);

// DELETE requests at /activities/:id
router.delete("/:id", activitiesController.deleteActivity);

// PATCH requests at '/activities/:id'
router.patch("/:id", activitiesController.updateActivityLikes);

export default router;
