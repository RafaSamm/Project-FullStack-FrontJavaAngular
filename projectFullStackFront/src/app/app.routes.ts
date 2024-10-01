import { Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonRegistrationComponent } from './person-registration/person-registration.component';

export const routes: Routes = [
  { path: 'personRegister', component: PersonRegistrationComponent },
  { path: 'person', component: PersonListComponent },
  { path: '', redirectTo: 'personRegister', pathMatch: 'full' },
];
