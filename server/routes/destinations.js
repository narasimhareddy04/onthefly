import express from "express";
import {
  createDestination,
  getDestinations,
  getDestination,
  updateDestination,
  deleteDestination,
} from "../controllers/destinations.js"; // Assume you saved your controller functions here

const router = express.Router();

router.get("/", getDestinations);
router.get("/:id", getDestination);
router.post("/", createDestination);
router.delete("/:id", deleteDestination);
router.patch("/:id", updateDestination);

export default router;
