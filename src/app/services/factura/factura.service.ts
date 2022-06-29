import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductosI } from 'src/app/Models/Productos/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private datosDetalleProducto: ProductosI[] =[];
  private itemsDPro: BehaviorSubject<ProductosI[]> = new BehaviorSubject(this.datosDetalleProducto);
  public items: Observable<ProductosI[]> = this.itemsDPro.asObservable();

  constructor() { }


  addToCar(pro:ProductosI){
    
    let index = this.datosDetalleProducto.findIndex(item => item.Id === pro.Id );

    if( index === -1 ){
      this.datosDetalleProducto.push(pro);
      
    }
    else
      this.datosDetalleProducto.slice(index,1);

  }




}
