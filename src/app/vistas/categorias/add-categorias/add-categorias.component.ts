import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriasI } from 'src/app/Models/Categorias/categorias.interface';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrls: ['./add-categorias.component.css']
})
export class AddCategoriasComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:CategoriasService, private toast:ToastrService) { }


  datosCategoria: CategoriasI | undefined;

  addForm= new UntypedFormGroup({

    
    Categoria: new UntypedFormControl('',[Validators.required]),
    

  });


  ngOnInit(): void {

  }


  postForm(form: CategoriasI )
  {

  
      this.api.addCategoria(form).subscribe(data =>
      {

        this.toast.success('Categoria Agregada','! Agregada')
      },

      (error) =>
      
      { 
        this.toast.warning(`${error}`,'! Error')
      });

      this.router.navigate(['Categoria'])
  }



  get cate()
  {
    return this.addForm.get('Categoria')
  };



  exit(){

    this.router.navigate(['Categoria'])
  }



}
