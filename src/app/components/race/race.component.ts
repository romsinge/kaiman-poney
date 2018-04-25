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

  ponies$: Observable<Poney[]>

  id$: Observable<number>

  race: Race = {
    id: 0,
    name: "",
    poneyIds: []
  }

  ponies: Poney[] = []

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

    this.raceService.getRace(id).subscribe(race => {
      this.race = race

      this.ponies$ = this.raceService.getPonies()

      this.ponies$.subscribe(ponies => {
        this.ponies = ponies
        this.startRace()
      })
    })
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
