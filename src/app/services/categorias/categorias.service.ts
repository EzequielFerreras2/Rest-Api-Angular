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

    let direction = this.url+"category";
    return this.http.get<CategoriasI[]>(direction).pipe(
      catchError( this.handleError)
    );
  }
  
  getCategoriaByid(id: any):Observable<CategoriasI>{
  
    let direction = this.url +"category/id:" +id;
  
    return this.http.get<CategoriasI>( direction).pipe(
      catchError( this.handleError)
    );
  
  }
  
  
  addCategoria(form:CategoriasI):Observable<CategoriasI>{
    
    let direction = this.url +"category";
    return this.http.post<CategoriasI>(direction,form).pipe(
      catchError( this.handleError)
    );
  
  }
  
  updateCategoria(id: any, form:CategoriasI):Observable<CategoriasI>{
  
    let direction = this.url +"category/id:" +id;
    return this.http.put<CategoriasI>(direction, form).pipe(
      catchError( this.handleError)
    )
    
    
  }
  
  removeCategoria(id: any):Observable<CategoriasI>{
    let direction = this.url +"category/id:" +id;
    return this.http.delete<CategoriasI>(direction).pipe(
      catchError( this.handleError)
    );
  
  }


handleError(error: HttpErrorResponse){

  console.log(error)
   return throwError(error.message || error.error.title)

}
}
