import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    SidebarModule,
    FormsModule,
    TabViewModule,
  ]
})
export class DashboardModule { }
