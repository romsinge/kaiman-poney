import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RaceComponent } from './components/race/race.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router'

export const rootRouterConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  {
    path: 'race',
    redirectTo: 'home'
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: 'race-create',
    component: RaceCreateComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]