import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CategoriasI } from 'src/app/Models/Categorias/categorias.interface';
@Component({
  selector: 'edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.css']
})
export class EditCategoriasComponent implements OnInit {

  public errorMsg: any;

  constructor(private activeroute:ActivatedRoute, private router: Router, private api:CategoriasService, private toast:ToastrService) { }


  datosCategoria: CategoriasI | undefined;

  editForm= new FormGroup({

    id: new FormControl(''), 
    categoria: new FormControl('',[Validators.required]),
    

  });


  ngOnInit(): void {

    
    let categoriaId = this.activeroute.snapshot.paramMap.get('id');

    this.api.getCategoriaByid(categoriaId).subscribe( data =>{
       this.datosCategoria = data;

       this.editForm.setValue({
         
         'id': categoriaId,
         'categoria': this.datosCategoria.categoria,
             
       });
    })
     
  }


  postForm(form: CategoriasI )
  {
    let id = this.activeroute.snapshot.paramMap.get('id')

  
      this.api.updateCategoria(id,form).subscribe(data =>
      {

        this.toast.success('Categoria Actualizada','! Actualizado')
      },

      (error) =>
      
      { 
        this.toast.warning(`${error}`,'! Error')
      });

      this.router.navigate(['categoria'])
  }


  removeForm()
  {
    let id = this.activeroute.snapshot.paramMap.get('id')
 
      this.api.removeCategoria(id).subscribe(data =>
      {

        this.toast.warning(`${data.categoria}`,'Categoria Eliminada')
      },
      
      (error) =>{
          this.toast.warning(`${error}`,'! Error')
      }); 

      this.router.navigate(['Categoria']);
  }

  
  get cate()
  {
    return this.editForm.get('categoria')
  };

 



  exit(){

    this.router.navigate(['categoria'])
  }

}
