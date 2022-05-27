import { Injectable } from '@angular/core';
import { HttpClient,HttpContext,HttpErrorResponse,HttpHeaders, HttpRequest } from '@angular/common/http';
import { throwError,catchError,Observable} from 'rxjs';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  url:string="https://localhost:7137/";

  constructor(private http:HttpClient) { }

  cateogriaid(id: number)
  {
    return id;
  }

  getAllProductos():Observable<ProductosI[]>{
    let direcction = this.url+"producto"
    return this.http.get<ProductosI[]>(direcction).pipe(
      catchError(this.handleError)
    )
  }







  handleError(error: HttpErrorResponse){
 
     return throwError(error.message || 'Error en el Servidor' || error.error.title)
  
  }
}
