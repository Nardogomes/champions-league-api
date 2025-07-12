import { Request, Response } from "express"
import * as ClubService from "../services/clubs-service"

export const getClubs = async (req: Request, res: Response) => {
  const httpResponse = await ClubService.getClubService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
