import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor( private toast:ToastrService) { }

  showSuccess(titulo: any, texto:any){
    this.toast.success(texto, titulo)
  }


  showError(titulo: any, texto:any){
    this.toast.error(texto, titulo)
  }
}
