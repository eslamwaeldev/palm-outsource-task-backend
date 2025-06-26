import { Router } from "express";
import { check } from "express-validator";
import {
  getAllMoods,
  getMood,
  postAddMood,
  postMoodExercise,
} from "../controllers/mood.ts";

const moodRouter = Router();

moodRouter.get("/", getAllMoods);

moodRouter.get("/details/:moodName", getMood);

moodRouter.post(
  "/",
  [
    check("name", "Mood name is required").exists().isString(),
    check("imgSrc", "Mood Image is required").exists().isString(),
    check("exercises", "Mood Exercises are required").exists().isArray(),
  ],
  postAddMood,
);

moodRouter.post(
  "/suggestion",
  [
    check("mood", "Mood id is required").exists().isString(),
    check("energy", "User energy is required").exists().isString(),
  ],
  postMoodExercise,
);

export default moodRouter;
