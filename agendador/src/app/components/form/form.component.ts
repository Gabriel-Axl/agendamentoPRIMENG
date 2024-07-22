import { Component, OnInit } from '@angular/core';


interface DiaDaSemana {
  name: string,
  valor: number
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  dataDiaMes:string = "";
  dataDiaSemana:string = "";
  minDate: Date;
  maxDate: Date;
  checked: boolean = false;
  diasSemana: DiaDaSemana[];
  selectedDia?: DiaDaSemana; 

  constructor() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(year);
    this.maxDate = new Date(today.getFullYear(), 11, 31);
    this.diasSemana = [
      {name: 'Domingo', valor: 0},
      {name: 'Segunda-Feira', valor: 1},
      {name: 'Terça-Feira', valor: 2},
      {name: 'Quarta-Feira', valor: 3},
      {name: 'Quinta-Feira', valor: 4},
      {name: 'Sexta-Feira', valor: 5},
      {name: 'Sabado', valor: 6}
  ]; 
 
  
  }

  ngOnInit(): void {
    
    
  }
}

