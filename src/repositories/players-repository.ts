import { PlayerModel } from "../models/player-model"

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Gemain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65
    }
  },
  {
    id: 2,
    name: "Kylian Mbappé",
    club: "Paris Saint-Gemain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 97,
      Shooting: 88,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 77
    }
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 93,
      Dribbling: 88,
      Defending: 64,
      Physical: 78
    }
  },
  {
    id: 4,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 89,
      Shooting: 94,
      Passing: 65,
      Dribbling: 80,
      Defending: 45,
      Physical: 88
    }
  },
  {
    id: 5,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 95,
      Shooting: 82,
      Passing: 79,
      Dribbling: 90,
      Defending: 29,
      Physical: 67
    }
  },
  {
    id: 6,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 75,
      Shooting: 80,
      Passing: 83,
      Dribbling: 85,
      Defending: 77,
      Physical: 82
    }
  },
  {
    id: 7,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 78,
      Shooting: 92,
      Passing: 79,
      Dribbling: 85,
      Defending: 44,
      Physical: 82
    }
  }
];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find( player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  return database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(p => p.id === id)

  if(index !== -1) {
    database.splice(index, 1)
  }
}