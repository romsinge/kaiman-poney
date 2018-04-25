import { RaceService } from './services/race.service';
import { Component } from '@angular/core';
import { Race } from './interfaces/race';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kmn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kaiman';
  races$: Observable<Race[]>

  constructor(private raceService: RaceService) {}

  ngOnInit() {
    this.races$ = this.raceService.getRaces()
  }
}
