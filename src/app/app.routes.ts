import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { TimelineComponent } from './pages/timeline/timeline.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'timeline', component: TimelineComponent }
  ]
