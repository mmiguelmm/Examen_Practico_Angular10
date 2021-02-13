import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';


@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent, SuscribeFormComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
