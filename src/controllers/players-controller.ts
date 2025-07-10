import { Request, Response } from "express"
import * as PlayerService from "../services/players-service"

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await PlayerService.getPlayerService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const httpResponse = await PlayerService.getPlayerByIdService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
