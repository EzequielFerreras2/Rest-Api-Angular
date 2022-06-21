import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'home-factura-cliente',
  templateUrl: './home-factura-cliente.component.html',
  styleUrls: ['./home-factura-cliente.component.css']
})
export class HomeFacturaClienteComponent implements OnInit {

  clientes: ClienteI[] | undefined ;
  
  displayedColumns: string[] = ['Id', 'NombreCliente', 'Cedula', 'Membresia'];
  dataSource!: MatTableDataSource<any> ;

  

  constructor( private api:ApiService, private rou:Router,  private paginator: MatPaginator) { }


  
 
  findForm= new FormGroup({
 
    nombreCliente: new FormControl('',[Validators.required])
  

  });



  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;

    this.api.geAllCliente().subscribe(data =>
    {
      this.clientes = data;
      let ar = data.map(item =>{ return{$key: item.Id}})
      
      
     
      this.dataSource = new MatTableDataSource(ar)
    })

    
  };
  


  findCliente(cliente: string){

    this.api.findClienteByCedula(cliente).subscribe(data =>
      {
        this.clientes = data;
      })

  };


facturarCliente(id : Number)
{
    this.rou.navigate(['facturar-cliente',id])
};

prueba(){

  console.log(1)
}

prueba2(){

  console.log(2)
}


borrar(){

window.location.reload();
};






exit(){

  this.rou.navigate(['factura'])
};

}
