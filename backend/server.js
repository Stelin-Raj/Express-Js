const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
