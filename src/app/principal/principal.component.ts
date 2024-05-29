import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  mensajes = ['¡Hola!', 'Welcome', 'Bienvenido', 'Salut', '你好'];
  mensaje: string | undefined;

  constructor() {} 
  ngOnInit(): void {
      let indice = 0;
      setInterval(() => {
          this.mensaje = this.mensajes[indice];
          indice = (indice + 1) % this.mensajes.length;
      }, 2000);
  }
}
