import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/product.interface';

@Component({
  selector: 'products-product-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  public product!: Producto;

  ngOnInit(): void {
    if ( !this.product ) {
      throw new Error('Producto es requerido');
    }
  }


}
