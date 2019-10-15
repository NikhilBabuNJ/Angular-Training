import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitBaseComponent } from 'src/app/Fruits/fruits-base.component';
import { FruitsListComponent } from 'src/app/Fruits/fruits-list/fruits-list.component';
import { FruitsInfoComponent } from 'src/app/Fruits/fruits-info/fruits-info.component';
import { RouterModule } from '@angular/router';



const routes = [
    {
        path: '', component: FruitBaseComponent, children: [
            { path: 'fruits-list', component: FruitsListComponent },
            { path: 'fruits-info', component: FruitsInfoComponent }
        ]
    },
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FruitsRoutingModule { }
