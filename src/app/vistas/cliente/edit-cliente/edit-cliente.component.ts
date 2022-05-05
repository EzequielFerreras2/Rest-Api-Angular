import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  constructor( private activeroute:ActivatedRoute, private router: Router, private api:ApiService) { }

  ngOnInit(): void {

    let clienteId = this.activeroute.snapshot.paramMap.get('id');
      console.log("Cliente: "+ clienteId)

    this.api.GetClienteByid(clienteId).subscribe( data =>{
       
      console.log(data)
    })
  }




}
