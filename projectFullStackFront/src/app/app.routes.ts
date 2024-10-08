import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonRegistrationComponent } from './person-registration/person-registration.component';
import { PersonUpdateComponent } from './person-update/person-update.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personRegister', component: PersonRegistrationComponent },
  { path: 'personUpdate/:id', component: PersonUpdateComponent },
  { path: 'person', component: PersonListComponent },
  { path: 'person-details/:id', component: PersonDetailsComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
