import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Producto } from '../../interfaces/product.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit{

  public productForm = new FormGroup({
    _id:  new FormControl<String>(''),
  nombre: new FormControl<String>(''),
  state:  new FormControl<Boolean>(true),
  precio: new FormControl<Number>(0),
  descripcion: new FormControl<String>(''),
  img:    new FormControl('')
  });

constructor( private productService:ProductService, private activatedRoute: ActivatedRoute, private router: Router ){}


get currenProduct(): Producto {
  const producto = this.productForm.value as Producto

  return producto;
}

ngOnInit(): void {

  if( !this.router.url.includes('edit') ) return;
 /*this.activatedRoute.params
    .pipe(

    ).subscribe( ({ id }) => {
      console.log( { id }  )
    } )*/
  this.activatedRoute.params
    .pipe(
      switchMap( ( {id }) => this.productService.getProductById( id ) ),
    ).subscribe( producto => {
      if( !producto ) return this.router.navigateByUrl('/');
      this.productForm.reset( producto );
      return;
    } )
}

onSumit():void{
  if (  this.productForm.invalid ) return

  if ( this.currenProduct._id ) {
    this.productService.updateProduct( this.currenProduct )
      .subscribe( producto => {
        //mostrar mensaje de ok
      });
      return
  }

  this.productService.addProduct( this.currenProduct )
    .subscribe( producto => {
      //mostrar mensaje de guardado y redireccionar
    })

  console.log({
    formIsValid: this.productForm.valid,
    value: this.productForm.value
  })
}

}
