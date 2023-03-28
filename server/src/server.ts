import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  console.log("Ads");
});

app.listen(3333);
