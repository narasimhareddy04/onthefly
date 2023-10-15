import express from "express";
import cors from "cors";
import tripRoutes from "./routes/trips.js";
import activityRoutes from "./routes/activities.js";
import destinationsRoutes from "./routes/destinations.js";
import tripDestinationsRoutes from "./routes/trip_destinations.js";
// create express app
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>'
    );
});

app.use("/api/trips", tripRoutes);
app.use("/api", activityRoutes);
app.use("/api", destinationsRoutes);
app.use("/api", tripDestinationsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
