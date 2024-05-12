const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoConnect = require("./db");
const taskRoutes = require("./routes/Task");
const userRoutes = require("./routes/User");
mongoConnect();

const port = process.env.PORT || 4000;
const app = express();

app.use(cors({
  origin: 'https://task-app-client-omega.vercel.app',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true 
}));
app.use(express.json());

//route functionality
app.use("/api", taskRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Developers!");
});

app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
