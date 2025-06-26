import type { Request, Response } from "express";

export const getError = (req: Request, res: Response) => {
  res.status(404).json({
    error: "The route you are trying to access is not found",
  });
};
