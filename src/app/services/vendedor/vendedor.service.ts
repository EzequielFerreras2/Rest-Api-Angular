import { Injectable } from '@angular/core';
import { HttpErrorResponse,HttpClient,HttpContext,HttpHeaders, HttpRequest } from '@angular/common/http';
import { throwError,catchError,Observable} from 'rxjs';
import { VendedorI } from 'src/app/Models/Vendedor/vendedor.interface';


@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  url:string="https://localhost:7137/";

  constructor( private http:HttpClient) { }



  getAllVendedor():Observable<VendedorI[]> {

    let direction = this.url+"Vendedor";
    return this.http.get<VendedorI[]>(direction).pipe(
      catchError( this.handleError)
    );
  }
  
  getVendedorByid(Id: any):Observable<VendedorI>{
  
    let direction = this.url +"Vendedor/Id:" +Id;
  
    return this.http.get<VendedorI>( direction).pipe(
      catchError( this.handleError)
    );
  
  }
  
  
  addVendedor(form:VendedorI):Observable<VendedorI>{
    
    let direction = this.url +"Vendedor";
    return this.http.post<VendedorI>(direction,form).pipe(
      catchError( this.handleError)
    );
  
  }
  
  updateVendedor(Id: any, form:VendedorI):Observable<VendedorI>{
  
    let direction = this.url +"Vendedor/Id:" +Id;
    return this.http.put<VendedorI>(direction, form).pipe(
      catchError( this.handleError)
    )
    
    
  }
  
  removeVendedor(Id: any):Observable<VendedorI>{
    let direction = this.url +"Vendedor/Id:" +Id;
    return this.http.delete<VendedorI>(direction).pipe(
      catchError( this.handleError)
    );
  
  }


handleError(error: HttpErrorResponse){

  console.log(error)
   return throwError(error.message || error.error.title)

}


}
