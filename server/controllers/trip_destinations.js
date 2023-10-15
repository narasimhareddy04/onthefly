import { pool } from "../config/database.js";

export const createTripDestination = async (req, res) => {
  try {
    const { trip_id, destination_id } = req.body;
    const result = await pool.query(
      "INSERT INTO trip_destinations (trip_id, destination_id) VALUES($1, $2) RETURNING *",
      [trip_id, destination_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getTripsDestinations = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM trip_destinations");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getAllTrips = async (req, res) => {
  try {
    const destination_id = parseInt(req.params.destination_id);
    const result = await pool.query(
      "SELECT * FROM trip_destinations WHERE destination_id = $1",
      [destination_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getAllDestinations = async (req, res) => {
  try {
    const trip_id = parseInt(req.params.trip_id);
    const result = await pool.query(
      "SELECT * FROM trip_destinations WHERE trip_id = $1",
      [trip_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
