import type { Request, Response } from "express";
import prisma from "../utils/prismaClient.ts";

export const getAllExercise = async (req: Request, res: Response) => {
  const allExercises = await prisma.exercise.findMany();
  if (allExercises.length <= 0) {
    res.status(422).json({
      error: "No exercises available",
    });
    return;
  }
  res.status(200).json({
    data: allExercises,
  });
};

export const postAddExercise = async (req: Request, res: Response) => {
  const { name, imgSrc, description } = req.body;
  console.log("🚀 ~ postAddExercise ~ body:", req.body);

  const createdExercise = await prisma.exercise.create({
    data: {
      name: name,
      imgSrc: imgSrc,
      description: description,
    },
  });

  res.status(200).json({
    data: createdExercise,
    message: "Exercise Created successfully",
  });
};
