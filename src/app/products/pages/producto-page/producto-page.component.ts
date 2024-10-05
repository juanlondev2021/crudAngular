import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Producto } from '../../interfaces/product.interface';

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrl: './producto-page.component.css'
})
export class ProductoPageComponent implements OnInit{

  public product?: Producto;
  constructor( private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router ){}


  ngOnInit(): void {
    /*this.activateRoute.params
    .pipe(

    ).subscribe( params => {
      console.log({ params })
    } )*/

    this.activatedRoute.params
    .pipe( switchMap( ({ id })=> this.productService.getProductById( id ) ), )
    .subscribe( producto => {
      if ( !producto ) return this.router.navigate([ 'products/list']);
      this.product = producto;
      console.log({ producto })
      return
    } )

  }

}
