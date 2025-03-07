import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error("Error en el servidor:", err);
  res.status(500).json({ error: "Error interno del servidor" });
}
