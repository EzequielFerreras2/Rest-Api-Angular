import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  constructor( private activeroute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let clienteId = this.activeroute.snapshot.paramMap.get('id');

    console.log(clienteId)
  }

}
