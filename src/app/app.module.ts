import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserinfoComponent } from 'src/app/user-info/user-info.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FruitsModule } from 'src/app/Fruits/fruits.module';
import { UpperCasePipe } from 'src/app/pipes/uppercase.pipe';
import { LimitStringPipe } from 'src/app/pipes/limitString.pipe';
import { CustomColorDirective } from 'src/app/directives/customDirective.directive';
import { TemplateDrivenFormsComponent } from './Forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    ManageUsersComponent,
    ModalWindowComponent,
    ErrorPageComponent,
    HomeComponent,
    UpperCasePipe,
    LimitStringPipe,
    CustomColorDirective,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FruitsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
