import { RaceService } from './../../services/race.service';
import { Component, OnInit } from '@angular/core';
import Poney from '../../interfaces/poney';
import { Race } from '../../interfaces/race';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kmn-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>

  race: FormGroup

  color: string

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.ponies$ = this.raceService.getPonies()

    this.race = new FormGroup({
      poneyIds: new FormControl([], Validators.required)
    })

    this.race.addControl('name', new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]))

    this.race.valueChanges
    .subscribe(value => {
      this.color = this.getRandomColor()
    })
  }

  michelNotDaniele() {
    return (control) => {
      console.log(this.race.value)

      if (control.value == 'Michel' && !this.race.value.poneyIds.includes(1)) {
        return null
      } else {
        return { 'michelNotDaniele': true }
      }
    }
  }

  getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleSubmit() {
    console.log(this.race)
  }
}
