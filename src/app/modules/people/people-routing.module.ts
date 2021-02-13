import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';

const routes: Routes = [

  {
    path: '',
    component: ContactsFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
