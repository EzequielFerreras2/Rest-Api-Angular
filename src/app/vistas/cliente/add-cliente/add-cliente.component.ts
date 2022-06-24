import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UntypedFormControl,UntypedFormGroup, Validators } from '@angular/forms';
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

  constructor(private router: Router, private api:ApiService, private toast:ToastrService) {  }

  ngOnInit(): void {
  }


  Cliente: ClienteI | undefined;

  addForm= new UntypedFormGroup({

      
    nombreCliente: new UntypedFormControl('',[Validators.required]),
    cedula: new UntypedFormControl('',[Validators.pattern("\d{3}-\d{7}-\d{1}$")]),
    membresia: new UntypedFormControl('',[Validators.required])

  });

  membresiaCLiente =[
  
  {memb:"Premium"},
  {memb:"Super"},
  {memb:"Regular"}
]


postForm(form: ClienteI  ){
  
  this.api.addCliente(form).subscribe( data=>{

    this.toast.success('Usuario Agregado exitosamente','! Agregado');
    this.router.navigate(['cliente']);
  },
  
  (error) =>
  {
    this.toast.warning(`${error}`,'! Error');
  }
 );


}


  exit(){

    this.router.navigate(['cliente']);
  }


/* ===========================================================================================Validacion de Datos*/

  get nomCli()
  {
    return this.addForm.get('nombreCliente');
  };

  get cedu()
  {
    return this.addForm.get('cedula');
  };
  get mem()
  {
    return this.addForm.get('membresia');
  };


}
