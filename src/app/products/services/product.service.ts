import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import {  Producto, ProductInterface } from '../interfaces/product.interface';
import { environments } from '../../environments/environments.prod';



@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  getProducts():Observable<Producto[]>{

    return this.http.get<Producto[]>(`${ this.baseUrl }/api/products`).pipe(map((response: any) => response.productos));

  }

  getProductById( id: string ):Observable<Producto|undefined>{
    return this.http.get<Producto>(` ${ this.baseUrl }/api/products/${ id } `)
    .pipe(
      catchError( error => of( undefined ))
    ).pipe(
      map((response: any) => response)
    )
  }

  addProduct( producto:Producto): Observable<Producto>{
    return this.http.post<Producto>(` ${ this.baseUrl }/api/products`, producto)
  }

  updateProduct( producto:Producto): Observable<Producto>{
    if ( !producto._id ) {
      throw Error(' el id del producto es requerido ');
    }
    return this.http.patch<Producto>(` ${ this.baseUrl }/api/products/${ producto._id }`, producto)
  }

  deleteProductById( id: string ): Observable<boolean>{

    return this.http.delete(` ${ this.baseUrl }/api/products/${ id }`)
    .pipe(
      catchError( err => of( false ) ),
      map( resp => true )
    );
  }

}
