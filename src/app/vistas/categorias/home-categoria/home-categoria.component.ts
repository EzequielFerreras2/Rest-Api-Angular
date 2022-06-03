import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriasI } from 'src/app/Models/Categorias/categorias.interface';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'home-categoria',
  templateUrl: './home-categoria.component.html',
  styleUrls: ['./home-categoria.component.css']
})
export class HomeCategoriaComponent implements OnInit {

  constructor( private router : Router, private api: CategoriasService, private toast: ToastrService) { }

  Categorias!: CategoriasI[];
  
  ngOnInit(): void {

   this.api.getAllCategoria().subscribe(data=>{
    
    this.Categorias = data;
    
   },
      
   (error) =>{
     console.log(error)
       this.toast.warning(`${error}`,'! Error')
   });
   
  }


  updateCategoria(id : Number)
  {
    this.router.navigate(['categoria',id])
  }

  addCategoria()
  {
    this.router.navigate(['add-Categoria'])
  }




}