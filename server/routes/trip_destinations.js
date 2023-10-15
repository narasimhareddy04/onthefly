import express from "express";
const router = express.Router();
// Controller imports
import {
  createTripDestination,
  getTripsDestinations,
  getAllTrips,
  getAllDestinations,
} from "../controllers/trip_destinations.js";

// Route handlers
router.get("/", getTripsDestinations);
router.get("/trips/:destination_id", getAllTrips);
router.get("/destinations/:trip_id", getAllDestinations);
router.post("/", createTripDestination);

export default router;
