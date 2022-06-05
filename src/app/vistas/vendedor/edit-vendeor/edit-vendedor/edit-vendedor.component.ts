import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { VendedorI } from 'src/app/Models/Vendedor/vendedor.interface';
import { VendedorService } from 'src/app/services/vendedor/vendedor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'edit-vendedor',
  templateUrl: './edit-vendedor.component.html',
  styleUrls: ['./edit-vendedor.component.css']
})
export class EditVendedorComponent implements OnInit {

  public errorMsg: any;

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:VendedorService, private toast:ToastrService) { }


  datosVendedor: VendedorI | undefined;

  editForm= new FormGroup({

    id: new FormControl(''), 
    nombreVendedor: new FormControl('',[Validators.required]),
    ventas: new FormControl('',[Validators.required])

  });


  ngOnInit(): void {

    
    let VendedorId = this.activeroute.snapshot.paramMap.get('id');

    this.api.getVendedorByid(VendedorId).subscribe( data =>{
       this.datosVendedor = data;

       this.editForm.setValue({
         
         'id': VendedorId,
         'nombreVendedor': this.datosVendedor.NombreVendedor,
         'ventas': this.datosVendedor.Ventas
         
       });
    })
     
  }


  postForm(form: VendedorI )
  {
    let id = this.activeroute.snapshot.paramMap.get('id')

  
      this.api.updateVendedor(id,form).subscribe(data =>
      {

        this.toast.success('Vendedor Actualizado','! Actualizado')
      },

      (error) =>
      
      { 
        this.toast.warning(`${error}`,'! Error')
      });

      this.router.navigate(['vendedor'])
  }


  removeForm()
  {
    let id = this.activeroute.snapshot.paramMap.get('id')
 
      this.api.removeVendedor(id).subscribe(data =>
      {

        this.toast.warning(`${data.NombreVendedor}`,'Vendedor Eliminado')
      },
      
      (error) =>{
          this.toast.warning(`${error}`,'! Error')
      }); 

      this.router.navigate(['vendedor']);
  }

  get nomVend()
  {
    return this.editForm.get('nombreVendedor')
  };

  get vent()
  {
    return this.editForm.get('ventas')
  };




  exit(){

    this.router.navigate(['vendedor'])
  }

}
