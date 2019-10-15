

import { NgModule } from '@angular/core';
import { UserinfoComponent } from 'src/app/user-info/user-info.component';
import { ManageUsersComponent } from 'src/app/manage-users/manage-users.component';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { FruitBaseComponent } from 'src/app/Fruits/fruits-base.component';
import { FruitsListComponent } from 'src/app/Fruits/fruits-list/fruits-list.component';
import { FruitsInfoComponent } from 'src/app/Fruits/fruits-info/fruits-info.component';
import { TemplateDrivenFormsComponent } from 'src/app/Forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from 'src/app/Forms/reactive-forms/reactive-forms.component';

const routes = [
    { path: '', redirectTo: 'manage-users', pathMatch: 'full' },
    { path: 'user-info/:id', component: UserinfoComponent },
    { path: 'manage-users', component: ManageUsersComponent },
    {path: 'fruits', loadChildren: 'src/app/Fruits/fruits.module#FruitsModule'},
    {path: 'tempalteDrivenForms', component: TemplateDrivenFormsComponent},
    {path: 'reactiveForms', component: ReactiveFormsComponent},
    { path: '**', component: ErrorPageComponent }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}

