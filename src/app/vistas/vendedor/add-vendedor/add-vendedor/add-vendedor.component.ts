import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendedorI } from 'src/app/Models/Vendedor/vendedor.interface';
import { VendedorService } from 'src/app/services/vendedor/vendedor.service';

@Component({
  selector: 'add-vendedor',
  templateUrl: './add-vendedor.component.html',
  styleUrls: ['./add-vendedor.component.css']
})
export class AddVendedorComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:VendedorService, private toast:ToastrService) { }


  datosVendedor: VendedorI | undefined;

  addForm= new UntypedFormGroup({

    nombreVendedor: new UntypedFormControl('',[Validators.required]),
    ventas: new UntypedFormControl('',[Validators.required])

  });



  postForm(form: VendedorI  ){
  
    this.api.addVendedor(form).subscribe( data=>{
  
      this.toast.success('Vendedor Agregado exitosamente','! Agregado');
      this.router.navigate(['vendedor']);
    },
    
    (error) =>
    {
      this.toast.warning(`${error}`,'! Error');
    }
   );
  
  
  }
  
  


  ngOnInit(): void {



  }


  get nomVend()
  {
    return this.addForm.get('nombreVendedor')
  };

  get vent()
  {
    return this.addForm.get('ventas')
  };




  exit(){

    this.router.navigate(['vendedor'])
  }

}
