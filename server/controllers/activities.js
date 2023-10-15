import { pool } from "../config/database.js";

const createActivity = async (req, res) => {
  try {
    const { trip_id } = req.params;
    const { activity } = req.body;
    const result = await pool.query(
      "INSERT INTO activities (trip_id, activity) VALUES ($1, $2) RETURNING *",
      [trip_id, activity]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

//Retrieve all activities
const getActivities = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM activities");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

//retrive all activities associated with a specific trip
const getTripActivities = async (req, res) => {
  try {
    const { trip_id } = req.params;
    const result = await pool.query(
      "SELECT * FROM activities WHERE trip_id = $1",
      [trip_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

//Update the number of likes for a specific activity
const updateActivityLikes = async (req, res) => {
  try {
    const { id } = req.params;
    const { num_votes } = req.body;
    const result = await pool.query(
      "UPDATE activities SET num_votes = $1 WHERE id = $2 RETURNING *",
      [num_votes, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

//Delete a single activity
const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM activities WHERE id=$1", [id]);
    res.status(204).send();
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  createActivity,
  getActivities,
  getTripActivities,
  updateActivityLikes,
  deleteActivity,
};
