import { pool } from "../config/database.js";

export const createTripDestination = async (req, res) => {
  try {
    const { trip_id, destination_id } = req.body;
    const result = await pool.query(
      "INSERT INTO trips_destinations (trip_id, destination_id) VALUES($1, $2) RETURNING *",
      [trip_id, destination_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getTripsDestinations = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM trips_destinations");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getAllTrips = async (req, res) => {
  try {
    const query = `
      SELECT *
      FROM trips
      INNER JOIN trips_destinations ON trips_destinations.trip_id = trips.id
      WHERE trips_destinations.destination_id = $1
    `;

    const destination_id = parseInt(request.params.destination_id);
    const results = await pool.query(query, [destination_id]);
    response.status(200).json(results.rows);
  } catch (error) {
    response.status(409).json({ error: error.message });
  }
};

export const getAllDestinations = async (req, res) => {
  try {
    const query = `
      SELECT *
      FROM destinations
      INNER JOIN trips_destinations ON trips_destinations.destination_id = destinations.id
      WHERE trips_destinations.trip_id = $1
    `;

    const trip_id = parseInt(request.params.trip_id);
    const results = await pool.query(query, [trip_id]);
    response.status(200).json(results.rows);
  } catch (error) {
    response.status(409).json({ error: error.message });
  }
};
