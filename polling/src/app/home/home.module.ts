import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, SidenavModule, MatToolbarModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
