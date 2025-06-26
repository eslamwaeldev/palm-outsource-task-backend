import { Router } from "express";
import {
  getAllExercise,
  postAddExercise,
  postMoodExercise,
} from "../controllers/exercise.ts";

const exerciseRouter = Router();

// Get Requests
exerciseRouter.get("/", getAllExercise);

//Post Requests

exerciseRouter.post("/", postAddExercise);

exerciseRouter.post("/mood", postMoodExercise);

export default exerciseRouter;
