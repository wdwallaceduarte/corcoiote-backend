import type { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/index.ts";
// import { error } from "node:console";

export default function errorHandler(
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction
) {
    if (error instanceof NotFoundError) {
        response.status(error.statusCode).json({message: error.message})
        return
    }

    response.status(500).json({ message: 'Erro interno do servidor.' })
}