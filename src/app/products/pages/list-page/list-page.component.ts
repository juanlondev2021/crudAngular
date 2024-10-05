import { Component, OnInit } from '@angular/core';
import { Producto, ProductInterface } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{

  public productos:Producto[] = [];


  constructor( private productService: ProductService ){

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( productos => this.productos = productos );
    console.log( this.productos );
  }

}
