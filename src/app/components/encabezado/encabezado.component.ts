import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {

  tituloPagina: string = "Página principal";
  imagenLateral: string = "/assets/logo-duoc.jpg";

  constructor() { }

  ngOnInit() {}

}
