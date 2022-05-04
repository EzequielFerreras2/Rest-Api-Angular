import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';





@Component({
  selector: 'home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {
  
clientes: ClienteI[] | undefined ; 


  constructor( private api:ApiService, private rou:Router) { 
    
  }

  ngOnInit(): void {

    this.api.geAllCliente().subscribe(data =>{

      
      this. clientes = data;

    })
  }


  updateCliente(id : Number){

    this.rou.navigate(['edit-cliente',id])
  }

  addCliente(){
    this.rou.navigate(['add-cliente'])
  }

}
