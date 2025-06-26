import type { Request, Response } from "express";

export const getAllExercise = async (req: Request, res: Response) => {
  res.status(200).json({
    data: "Exercises",
  });
};

export const postAddExercise = async (req: Request, res: Response) => {
  res.status(200).json({
    data: "Exercise Added Successfully",
  });
};

export const postMoodExercise = async (req: Request, res: Response) => {
  res.status(200).json({
    data: "exercise",
  });
};
