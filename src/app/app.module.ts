import { RaceService } from './services/race.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RacingDirective } from './directives/racing.directive';
import { RaceComponent } from './components/race/race.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { IsRacingPipe } from './pipes/is-racing.pipe';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RacingDirective,
    RaceComponent,
    CapitalizePipe,
    IsRacingPipe,
    HomeComponent,
    RaceCreateComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(rootRouterConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
