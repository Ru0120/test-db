import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Player } from "./db/models/Player.js";
import { Team } from "./db/models/Team.js";
import { Movie } from "./db/models/Movie.js";
dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose.connect(url).then(() => {
  console.log("mongo connected");
});

const app = express();

app.post("/", async (req, res) => {
  try {
    await Player.create({
      firstName: "AA      ",
      lastName: "dorj",
      team: "67a5e99e200d24c0e93e9fbe",
      age: 16,
      height: 180,
      weight: 80,
      salary: 1000,
      history: [{ team: "lakers", awards: "mvp" }],
      historyObject: { team: "lakers", awards: "mvp" },
      province: "ulaanbatar",
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});
app.post("/movie", async (req, res) => {
  try {
    await Movie.create({
      plot: "Cartoon figures announce, via comic strip balloons, that they will move - and move they do, in a wildly exaggerated style.",
      genres: "Animation",
      runtime: 7,
      cast: "Winsor McCay",
      num_mflix_comments: 0,
      poster:
        "https://m.media-amazon.com/images/M/MV5BYzg2NjNhNTctMjUxMi00ZWU4LWI3ZjYtNTI0NTQxNThjZTk2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SY1000_SX677_AL_.jpg",
      title:
        "Winsor McCay, the Famous Cartoonist of the N.Y. Herald and His Moving Comics",
      fullplot:
        "Cartoonist Winsor McCay agrees to create a large set of drawings that will be photographed and made into a motion picture. The job requires plenty of drawing supplies, and the cartoonist must also overcome some mishaps caused by an assistant. Finally, the work is done, and everyone can see the resulting animated picture.",
      languages: "English",
      released: 1995 - 12 - 12,
      directors: "Winsor McCay",
      writers: 'Winsor McCay (comic strip "Little Nemo in Slumberland")',

      awards: {
        wins: 1,
        nominations: 0,
        text: "1 win.",
      },
      lastupdated: "2015-08-29 01:09:03.030000000",
      year: 1911,
      imdb: {
        rating: 7.3,
        votes: 1034,
        id: 1737,
      },
      countries: "USA",
      type: "movie",
      tomatoes: {
        viewer: {
          rating: 3.4,
          numReviews: 89,
          meter: 47,
        },
        lastUpdated: 2024,
      },
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.post("/team", async (req, res) => {
  try {
    await Team.create({ name: "lakers" });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.get("/", async (req, res) => {
  const player = await Player.find({ lastName: "dorj" }).populate("team");

  res.send(player);
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
