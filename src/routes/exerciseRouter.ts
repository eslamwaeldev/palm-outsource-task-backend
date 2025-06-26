import { Router } from "express";
import { getAllExercise, postAddExercise } from "../controllers/exercise.ts";

const exerciseRouter = Router();

// Get Requests
exerciseRouter.get("/", getAllExercise);

//Post Requests

exerciseRouter.post("/", postAddExercise);

export default exerciseRouter;
