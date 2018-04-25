import { RaceService } from './../../services/race.service';
import { Component, OnInit } from '@angular/core';
import Poney from '../../interfaces/poney';
import { Race } from '../../interfaces/race';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'kmn-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies: Poney[]

  race: FormGroup

  color: string

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.ponies = this.raceService.getPonies()

    this.race = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      poneyIds: new FormControl([], Validators.required)
    })

    this.race.valueChanges.subscribe(value => {
      this.color = this.getRandomColor()
    })
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
