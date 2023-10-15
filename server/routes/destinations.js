import express from "express";
import {
  createDestination,
  getDestinations,
  getDestination,
  updateDestination,
  deleteDestination,
} from "../controllers/destinations.js"; // Assume you saved your controller functions here

const router = express.Router();

router.get("/destinations", getDestinations);
router.get("/destinations/:id", getDestination);
router.post("/destinations", createDestination);
router.delete("/destinations/:id", deleteDestination);
router.patch("/destinations/:id", updateDestination);

export default router;
