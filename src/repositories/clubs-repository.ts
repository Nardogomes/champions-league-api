import fs from "fs/promises"
import path from "node:path"
import { ClubModel } from "../models/club-model"

const pathData = path.join(__dirname, "../data/clubs.json")

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile(pathData, "utf-8")
  
  const clubs: ClubModel[] = JSON.parse(data)

  return clubs
}
