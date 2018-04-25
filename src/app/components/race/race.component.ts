import { Component, OnInit, Input } from '@angular/core';
import Poney from '../../interfaces/poney';
import { Race } from '../../interfaces/race';
import { RaceService } from '../../services/race.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'kmn-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  raceInterval: any

  ponies: Poney[]

  id$: Observable<number>

  race: Race

  constructor(public raceService: RaceService, private routeParams: ActivatedRoute) {}

  ngOnInit() {

    this.id$ = this.routeParams.params.map(params => params.id)
    
    this.id$.subscribe(id => {
      this.initRace(id)
    })
  }

  initRace(id: number) {
    this.stopRace()
    this.raceService.resetPonies()

    this.race = this.raceService.getRace(id)

    this.ponies = this.raceService.getPonies()

    this.startRace()
  }

  startRace(): void {
    this.raceInterval = setInterval(() => {
      this.ponies.every((poney, i) => {
        
        poney.distance += Math.floor(Math.random() * (10 - 1) + 1);

        if (poney.distance >= 80) {
          poney.distance = 80
          return false
        } else {
          return true
        }
      })
    }, 1000)
  }

  stopRace() {
    clearInterval(this.raceInterval)
  }

  handleWin(poney: Poney) {
    console.log("Winner : ", poney.name)

    this.stopRace()
  }

}
