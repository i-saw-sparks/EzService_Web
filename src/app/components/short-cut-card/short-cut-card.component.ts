import {Component} from '@angular/core';
import { ArrayType } from '@angular/compiler';
/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'app-short-cut-card',
  templateUrl: 'short-cut-card.component.html',
  styleUrls: ['short-cut-card.component.css'],
})

export class ShortCutCardComponent {
  shortcuts = [
    new cardContent('Estadisticas', ['Reportes', '?'],''),
    new cardContent('Usuarios', [], ''),
    new cardContent('Trabajadores', [], ''),
    new cardContent('Solicitudes de registro', ['Trabajadores', 'Intermediarios'], ''),
    new cardContent('Categorias', [], ''),
    new cardContent('Profesiones', [], ''), 
    new cardContent('Administradores', [], '')
  ];

}

class cardContent{
  title:string;
  buttons = [];
  icon:string;

  constructor(title:string, buttons, icon){
    this.title = title;
    this.buttons = buttons;
    this.icon = icon;
  }

}