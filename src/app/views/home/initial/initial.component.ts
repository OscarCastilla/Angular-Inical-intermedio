import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  title:string="Cargando datos..";

  constructor() { }

  ngOnInit(): void {
    this.title="los datos cargaron correctamente";
  }

}
