import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavMaterialsModule } from './material';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './side-nav.component';

@NgModule({
  imports: [CommonModule, SideNavMaterialsModule, RouterModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})

export class SidenavModule {}
