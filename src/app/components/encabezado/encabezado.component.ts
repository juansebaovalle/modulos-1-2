import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {

  @Input() tituloPagina: string;
  imagenLateral: string = "/assets/logo-duoc.jpg";
  
  constructor() { }

  ngOnInit() {}

}
