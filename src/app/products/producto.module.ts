import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-custom-material-file-input';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    NewPageComponent,
    ListPageComponent,
    SearchPageComponent,
    ProductoPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MaterialFileInputModule
  ]
})
export class ProductoModule { }
