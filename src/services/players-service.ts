import * as findAllPlayers from "../repositories/players-repository"
import { ok, noContent } from "../utils/http-helper"

export const getPlayerService = async () => {
  const data = await findAllPlayers.findAllPlayers()

  let response = null

  if(data) {
    response = await ok(data)
  } else {
    response = await noContent()
  }

  return response
}
