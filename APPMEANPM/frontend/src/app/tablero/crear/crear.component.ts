import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {TableroService} from '../../service/tablero.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private tablero: TableroService) {}
// almacenamos lo que digite el usuario
  crearActividad = {
    nombre: '',
    estado: '',
    descripcion: '',
  };

  ngOnInit(): void {}
// funcion de boton crear actividad
  crear() {
    this.tablero.crearActividad(this.crearActividad).subscribe(
      (res)=> {
        console.log(res);
        // apneas se crea actividad me lleva a la lista de Actividades
        this.router.navigate(['/listarActividad'])
      },
      (err)=> {
        console.log(err);
      }
    );
  }

}
