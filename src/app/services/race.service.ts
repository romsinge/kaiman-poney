import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney';
import { Race } from '../interfaces/race';

@Injectable()
export class RaceService {

  ponies: Poney[] = [
    {
      id: 0,
      name: "romain",
      distance: 0,
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif"
    },
    {
      id: 1,
      name: "emilien",
      distance: 0,
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif"
    },
    {
      id: 2,
      name: "daniele",
      distance: 0,
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    }
  ]

  races: Race[] = [
    {
      id: 0,
      name: "Tokyo",
      poneyIds: [0, 2]
    },
    {
      id: 1,
      name: "Madrid",
      poneyIds: [0, 1]
    },
    {
      id: 2,
      name: "Singapore",
      poneyIds: [1, 2]
    }
  ]

  getPonies(): Poney[] {
    return this.ponies
  }

  getRaces(): Race[] {
    return this.races
  }

  getRace(id: number): Race {
    return this.races.find(race => race.id == id)
  }

  resetPonies() {
    if (this.ponies && this.ponies.length) {
      this.ponies.forEach(poney => {
        poney.distance = 0
      })
    }
  }
}
