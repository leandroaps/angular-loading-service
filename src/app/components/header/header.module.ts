import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HeaderRoutingModule],
})
export class HeaderModule {}
