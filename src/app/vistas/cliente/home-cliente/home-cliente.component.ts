import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {
  
clientes: ClienteI[] | undefined ; 


  constructor( private api:ApiService ) { 
    
  }

  ngOnInit(): void {

    this.api.geAllCliente().subscribe(data =>{

      console.log(data)
      this. clientes = data;

    })
  }


  updateCliente(id : Number){

    console.log(id)
  }

  addCliente(){
    
  }

}
