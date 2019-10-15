import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsRoutingModule } from 'src/app/Fruits/fruits-routing.module';
import { FruitsInfoComponent } from 'src/app/Fruits/fruits-info/fruits-info.component';
import { FruitsListComponent } from 'src/app/Fruits/fruits-list/fruits-list.component';
import { FruitBaseComponent } from 'src/app/Fruits/fruits-base.component';

@NgModule({
  declarations: [
    FruitBaseComponent,
    FruitsListComponent,
    FruitsInfoComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }
