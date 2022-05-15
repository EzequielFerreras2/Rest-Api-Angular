import { Injectable } from '@angular/core';
import { ClienteI } from '../Models/Cliente/cliente.interface';
import {ResponseI} from '../Models/Cliente/response.inteface'
import { HttpClient,HttpContext,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://localhost:7137/";

  constructor( private http:HttpClient) { }


  
geAllCliente():Observable<ClienteI[]> {

  let direction = this.url+"cliente";
  return this.http.get<ClienteI[]>(direction);
}

GetClienteByid(id: any):Observable<ClienteI>{

  let direction = this.url +"cliente/id:" +id;

  return this.http.get<ClienteI>( direction);

}


addCliente(form:ClienteI):Observable<ClienteI>{
  
  let direction = this.url +"cliente";
  return this.http.post<ClienteI>(direction,form);

}

updateCliente(id: any, form:ClienteI):Observable<ClienteI>{

  let direction = this.url +"cliente/id:" +id;
  return this.http.put<ClienteI>(direction, form)
  
}

removeCliente(id: any):Observable<ClienteI>{
  let direction = this.url +"cliente/id:" +id;
  return this.http.delete<ClienteI>(direction);

}

}
