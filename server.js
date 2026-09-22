const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Pasta Perfect server is running"
  });
});

app.listen(PORT, () => {
  console.log(`Pasta Perfect is running on http://localhost:${PORT}`);
});