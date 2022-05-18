import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/services/vendedor/vendedor.service';
import { Router,ActivatedRoute } from '@angular/router';
import { VendedorI } from 'src/app/Models/Vendedor/vendedor.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'home-vendedor',
  templateUrl: './home-vendedor.component.html',
  styleUrls: ['./home-vendedor.component.css']
})
export class HomeVendedorComponent implements OnInit {

  constructor( private router : Router, private api: VendedorService) { }

vendedores : VendedorI []| undefined;

  ngOnInit(): void {

   this.api.getAllVendedor().subscribe(data=>{

    this.vendedores = data;

    console.log(data)
   })


  }


  updateVendedor(id : Number)
  {
    this.router.navigate(['vendedor',id])
  }

  addVendedor()
  {
    this.router.navigate(['add-vendedor'])
  }


exit(){

  this.router.navigate(['vendedor'])
}

}
