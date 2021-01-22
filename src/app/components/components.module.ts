import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SidemenuComponent,UserListComponent,FooterComponent],
  declarations: [SidemenuComponent,UserListComponent,FooterComponent]
})
export class ComponentsModule { }
