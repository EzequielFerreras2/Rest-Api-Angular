import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoriasI } from 'src/app/Models/Categorias/categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
  url:string="https://localhost:7137/";

  constructor( private http:HttpClient) { }



  getAllCategoria():Observable<CategoriasI[]> {

    let direction = this.url+"Category";
    return this.http.get<CategoriasI[]>(direction).pipe(
      catchError( this.handleError)
    );
  }
  
  getCategoriaByid(Id: any):Observable<CategoriasI>{
  
    let direction = this.url +"Category/Id:" +Id;
  
    return this.http.get<CategoriasI>( direction).pipe(
      catchError( this.handleError)
    );
  
  }
  
  
  addCategoria(form:CategoriasI):Observable<CategoriasI>{
    
    let direction = this.url +"Category";
    return this.http.post<CategoriasI>(direction,form).pipe(
      catchError( this.handleError)
    );
  
  }
  
  updateCategoria(Id: any, form:CategoriasI):Observable<CategoriasI>{
  
    let direction = this.url +"Category/Id:" +Id;
    return this.http.put<CategoriasI>(direction, form).pipe(
      catchError( this.handleError)
    )
    
    
  }
  
  removeCategoria(Id: any):Observable<CategoriasI>{
    let direction = this.url +"Category/Id:" +Id;
    return this.http.delete<CategoriasI>(direction).pipe(
      catchError( this.handleError)
    );
  
  }


handleError(error: HttpErrorResponse){

  console.log(error)
   return throwError(error.message || error.error.title)

}
}
