import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ResponseI } from 'src/app/Models/Cliente/response.inteface';
import { AlertasService } from 'src/app/services/alerta/alertas.service';


@Component({
  selector: 'edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  constructor( private activeroute:ActivatedRoute, private router: Router, private api:ApiService, private toast:ToastrService) { }


  

  datosCliente: ClienteI | undefined;

  editForm= new FormGroup({

    id: new FormControl(''), 
    nombreCliente: new FormControl('',[Validators.required]),
    cedula: new FormControl('',[Validators.required]),
    membresia: new FormControl('',[Validators.required])

  });

  membresiaCLiente =[
  
  {memb:"Premium"},
  {memb:"Super"},
  {memb:"Regular"}
]



  ngOnInit(): void {

    let clienteId = this.activeroute.snapshot.paramMap.get('id');

    this.api.GetClienteByid(clienteId).subscribe( data =>{
       this.datosCliente = data;

       this.editForm.setValue({
         
         'id': clienteId,
         'nombreCliente': this.datosCliente.NombreCliente,
         'cedula': this.datosCliente.Cedula,
         'membresia': this.datosCliente.Membresia
       });
    })
  }


  postForm(form: ClienteI )
  {
    let id = this.activeroute.snapshot.paramMap.get('id')
    this.api.updateCliente(id,form).subscribe(data =>{
      this.toast.success('Cliente Actualizado','! Actualizado')
    },
      
    (error) =>{
        this.toast.warning(`${error}`,'! Error')
    });

    this.router.navigate(['cliente']);
    
  }

  removeForm()
  {
    let id = this.activeroute.snapshot.paramMap.get('id')
    this.api.removeCliente(id).subscribe(data =>{
    
      this.toast.warning('Cliente Eliminado','! Actualizado')
    },
      
      (error) =>{
          this.toast.warning(`${error}`,'! Error')
      });

      this.router.navigate(['cliente'])
  }





  get nomCli()
  {
    return this.editForm.get('nombreCliente')
  };

  get cedu()
  {
    return this.editForm.get('cedula')
  };
  get mem()
  {
    return this.editForm.get('membresia')
  };



  exit(){

    this.router.navigate(['cliente'])
  }
}
