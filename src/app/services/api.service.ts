import { Injectable } from '@angular/core';
import { ClienteI } from '../Models/Cliente/cliente.interface';

import { HttpClient,HttpContext,HttpErrorResponse,HttpHeaders, HttpRequest } from '@angular/common/http';
import { throwError,catchError,Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://localhost:7137/";

  constructor( private http:HttpClient) { }


  
geAllCliente():Observable<ClienteI[]> {

  let direction = this.url+"cliente";
  return this.http.get<ClienteI[]>(direction).pipe(
    catchError( this.handleError)
  );
}

GetClienteByid(id: any):Observable<ClienteI>{

  let direction = this.url +"cliente/id:" +id;

  return this.http.get<ClienteI>( direction).pipe(
    catchError( this.handleError)
  );

}


addCliente(form:ClienteI):Observable<ClienteI>{
  
  let direction = this.url +"cliente";
  return this.http.post<ClienteI>(direction,form).pipe(
    catchError( this.handleError)
  );

}

updateCliente(id: any, form:ClienteI):Observable<ClienteI>{

  let direction = this.url +"cliente/id:" +id;
  return this.http.put<ClienteI>(direction, form).pipe(
    catchError( this.handleError)
  );
  
}

removeCliente(id: any):Observable<ClienteI>{
  let direction = this.url +"cliente/id:" +id;
  return this.http.delete<ClienteI>(direction).pipe(
    catchError( this.handleError)
  );

}

handleError(error: HttpErrorResponse){

  console.log(error)
   return throwError('error en el server'|| error.error.title)

}

}
