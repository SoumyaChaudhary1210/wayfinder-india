const express = require("express");
const path = require("path");
const { destinations } = require("./data");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(".")));

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend chal gaya!" });
});

app.get("/api/destinations", (req, res) => {
  const { weather, region, search } = req.query;
  let list = [...destinations];

  if (weather) {
    list = list.filter((item) =>
      item.weather.some((w) => w.toLowerCase() === weather.toLowerCase())
    );
  }

  if (region && region.toLowerCase() !== "anywhere in india") {
    list = list.filter(
      (item) => item.region.toLowerCase() === region.toLowerCase()
    );
  }

  if (search && search.trim() !== "") {
    const query = search.trim().toLowerCase();
    list = list.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.state.toLowerCase().includes(query)
    );
  }

  res.json(list);
});

app.get("/api/destinations/:id", (req, res) => {
  const { sortPrice, minRating, mode } = req.query;
  const place = destinations.find((item) => item.id === req.params.id);

  if (!place) {
    return res.status(404).json({ error: "Destination not found" });
  }

  let hotels = [...place.hotels];
  if (minRating) {
    hotels = hotels.filter((h) => h.rating >= Number(minRating));
  }
  if (sortPrice === "low-to-high") {
    hotels.sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (sortPrice === "high-to-low") {
    hotels.sort((a, b) => b.pricePerNight - a.pricePerNight);
  }

  let transport = [...place.transport];
  if (mode && mode.toLowerCase() !== "all") {
    transport = transport.filter(
      (t) => t.mode.toLowerCase() === mode.toLowerCase()
    );
  }

  res.json({
    ...place,
    hotels,
    transport
  });
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});