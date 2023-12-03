import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "OK",
    url: req.protocol + "://" + req.hostname + req.path,
  });
});

app.listen(3001, () => console.log(`Server is running on port ${3001}`));
