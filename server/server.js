const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOption));
app.use(express.json());
app.get("/api", (req, res) => {
  res.json({ cars: ["Mercedes", "Toyota", "FormData", "Opel", "Jaguar"]});
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
