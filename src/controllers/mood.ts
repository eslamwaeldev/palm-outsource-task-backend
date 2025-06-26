import type { Request, Response } from "express";
import prisma from "../utils/prismaClient.ts";

export const getAllMoods = async (req: Request, res: Response) => {
  const allMoods = await prisma.mood.findMany();
  if (allMoods.length <= 0) {
    res.status(200).json({
      message: "No Moods available",
    });
    return;
  }
  res.status(200).json({
    data: allMoods,
  });
};

export const getMood = async (req: Request, res: Response) => {
  const { moodName } = req.params;
  try {
    const mood = await prisma.mood.findUniqueOrThrow({
      where: {
        name: moodName,
      },
      include: {
        exercises: true,
      },
    });
    res.status(200).json({
      data: mood,
    });
  } catch (error) {
    res.status(404).json({
      message: "Mood is not found",
      error: error,
    });
  }
};

export const postAddMood = async (req: Request, res: Response) => {
  const { name, imgSrc, exercises } = req.body;

  const foundExercises = await prisma.exercise.findMany({
    where: {
      id: {
        in: exercises,
      },
    },
  });
  if (foundExercises.length !== exercises.length) {
    res.status(422).json({
      error: "Some of the exercises are not found",
    });
  }

  const addedMood = await prisma.mood.create({
    data: {
      imgSrc: imgSrc,
      name: name,
      exercises: {
        connect: exercises.map((id: string) => ({ id })),
      },
    },
    include: {
      exercises: true,
    },
  });

  res.status(200).json({
    message: "Mood created Successfully",
    data: addedMood,
  });
};

export const postMoodExercise = async (req: Request, res: Response) => {
  const { mood, energy, notes } = req.body;
  try {
    const currentMode = await prisma.mood.findUniqueOrThrow({
      where: {
        id: mood,
      },
      include: {
        exercises: true,
      },
    });
    console.log("🚀 ~ postMoodExercise ~ currentMode:", currentMode);
    if (!currentMode.exercises) {
      throw new Error("This mode has no exercises");
    }
    const exerciseIndex = Math.floor(
      Math.random() * currentMode.exercises.length,
    );
    console.log("🚀 ~ postMoodExercise ~ exerciseIndex:", exerciseIndex);

    res.status(200).json({
      suggestions: [
        `${currentMode.exercises[exerciseIndex]}`,
        `Try doing it ${energy} times to match your energy`,
      ],
    });
  } catch (error) {
    res.status(422).json({
      message: "An Error has occurred while finding your exercise",
      error: error,
    });
  }
};
