import mongoose from "mongoose";
//const mongoose = require("mongoose");
const { Schema } = mongoose;
export const movieSchema = new mongoose.Schema(
  {
    plot: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      require: true,
    },
    runtime: {
      type: Number,
      require: true,
    },
    cast: {
      type: [String],
      require: true,
    },

    poster: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    fullplot: {
      type: String,
      require: true,
    },
    language: {
      type: String,
      require: true,
    },
    released: {
      type: Date,
      require: true,
    },
    director: {
      type: [String],
      require: true,
    },
    writers: {
      type: [String],
      require: true,
    },
    awards: {
      type: {
        wins: {
          type: Number,
          required: true,
          text: Number,
        },
      },
      require: true,
    },
    lastupdated: {
      type: Date,
      require: true,
    },
    year: {
      type: Date,
      require: true,
    },
    imdb: {
      type: {
        rating: Number,
        votes: Number,
        id: Number,
      },
      require: true,
    },
    countries: {
      type: [String],
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    tomatoes: {
      type: {
        viewer: {
          rating: Number,
          numReviews: Number,
          meter: Number,
        },
      },
      require: true,
    },
  },
  {
    collection: "movies",
  }
);
