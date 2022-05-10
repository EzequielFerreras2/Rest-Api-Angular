import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Validator,FormControl,FormGroup } from '@angular/forms';
import { ClienteI } from 'src/app/Models/Cliente/cliente.interface';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  constructor( private activeroute:ActivatedRoute, private router: Router, private api:ApiService) { }

  datosCliente: ClienteI | undefined;

  editForm= new FormGroup({

    id: new FormControl(''), 
    nombreCliente: new FormControl(''),
    cedula: new FormControl(''),
    membresia: new FormControl('')

  });

  membresiaCLiente =[

  {memb:"Premium"},
  {memb:"Super"},
  {memb:"Regular"}
]

  membresiaSeleccionada: string="";

  memSelec:any  ={

    membresia:""

  }
  
  selecionMembrecia(e:any ){

    this.membresiaSeleccionada = e.target.value;
    
    return e.target.value;
  }
 


  

  ngOnInit(): void {

    let clienteId = this.activeroute.snapshot.paramMap.get('id');

    

    this.api.GetClienteByid(clienteId).subscribe( data =>{
       this.datosCliente = data;

      

       this.editForm.setValue({
         
         'id': clienteId,
         'nombreCliente': this.datosCliente.nombreCliente,
         'cedula': this.datosCliente.cedula,
         'membresia': this.datosCliente.membresia
       });

      
    })


   
  }


  postForm(form: ClienteI ){

    let id = this.activeroute.snapshot.paramMap.get('id')
    this.api.updateCliente(id,form).subscribe(data =>{
    console.log(data);
      

    });


  }

}
