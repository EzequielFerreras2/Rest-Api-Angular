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
      console.log(this.datosDetalleProducto)
    }
    else
      this.datosDetalleProducto.slice(index,1);

  }

  deleteItemCar( id:number ){

    let index = this.datosDetalleProducto.findIndex(item => item.Id === id);

    if(index > -1)
    {
     var a = this.datosDetalleProducto.filter((item)=>item.Id !== id)
     
      this.datosDetalleProducto = a;
      console.log(this.datosDetalleProducto)

      this.items.subscribe( data => this.datosDetalleProducto = a)
      
    }

  }



}
