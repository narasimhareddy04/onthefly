import { pool } from "../config/database.js";
export const createDestination = async (req, res) => {
  try {
    const { destination, description, city, country, img_url, flag_img_url } =
      req.body;
    const results = await pool.query(
      "INSERT INTO destinations (destination, description, city, country, img_url, flag_img_url) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [destination, description, city, country, img_url, flag_img_url]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDestinations = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM destinations ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDestination = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query(
      "SELECT * FROM destinations WHERE id = $1",
      [id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateDestination = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { destination, description, city, country, img_url, flag_img_url } =
      req.body;
    const results = await pool.query(
      "UPDATE destinations SET destination = $1, description = $2, city = $3, country = $4, img_url = $5, flag_img_url = $6 WHERE id = $7 RETURNING *",
      [destination, description, city, country, img_url, flag_img_url, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteDestination = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query("DELETE FROM destinations WHERE id = $1", [id]);
    res.status(204).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
