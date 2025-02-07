import mongoose, { get } from "mongoose";
const { Schema } = mongoose;
const playerHobbySchema = new Schema({
  team: String,
  awards: Array,
});
export const playerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
      enum: ["ulaanbatar", "arkhangai"],
    },

    age: {
      type: Number,
      required: true,
      min: 16,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    isInjured: {
      type: Boolean,
      default: false,
    },
    history: [playerHobbySchema],
    historyObject: playerHobbySchema,
  },
  {
    collection: "players",
    timestamps: true,
    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
  }
);
