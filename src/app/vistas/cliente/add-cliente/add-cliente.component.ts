import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AlertasService } from 'src/app/services/alerta/alertas.service';


@Component({
  selector: 'add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  constructor(private router: Router, private api:ApiService, private toastr:ToastrService, private alert:AlertasService) {  }

  ngOnInit(): void {
  }


  Cliente: ClienteI | undefined;

  addForm= new FormGroup({

      
    nombreCliente: new FormControl('',[Validators.required]),
    cedula: new FormControl('',[Validators.required]),
    membresia: new FormControl('',[Validators.required])

  });

  membresiaCLiente =[
  
  {memb:"Premium"},
  {memb:"Super"},
  {memb:"Regular"}
]


postForm(form: ClienteI  ){
  
  this.api.addCliente(form).subscribe( data=>{
    console.log(data)
  });
}


  exit(){

    this.router.navigate(['cliente'])
  }


/* ===========================================================================================Validacion de Datos*/

  get nomCli()
  {
    return this.addForm.get('nombreCliente')
  };

  get cedu()
  {
    return this.addForm.get('cedula')
  };
  get mem()
  {
    return this.addForm.get('membresia')
  };


}
