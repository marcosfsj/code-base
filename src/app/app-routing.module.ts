import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  FoosComponent,
  FooDetailsComponent,
  TemplateDrivenFormComponent,
  ReactiveFormComponent,
  SignupComponent
} from '.';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'foos', component: FoosComponent },
  { path: 'miscellaneous', component: MiscellaneousComponent },
  { path: 'foo-details/:id', component: FooDetailsComponent },
  { path: 'foo-details', component: FooDetailsComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
