import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


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
  dataDiaMes!:Date;
  dataDiaSemana!:Date;
  minDate: Date;
  maxDate: Date;
  checked: boolean = false;
  qualquerMes: boolean = false;
  diasSemana: DiaDaSemana[];
  selectedDia!: DiaDaSemana; 

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

  criarCron(cronForm: NgForm){

    

    if(this.checked){
      const diaSemana = this.selectedDia.valor
      const horas = this.dataDiaSemana.getHours();
      const minutos = this.dataDiaSemana.getMinutes();
      const segundos = this.dataDiaSemana.getSeconds();

      let cron = `${segundos} ${minutos} ${horas} * * ${diaSemana}`
      console.log(cron)
    }else{
      const diaDoMes = this.dataDiaMes.getDate();
      const mes = this.dataDiaMes.getMonth() + 1 ;  
      const horas = this.dataDiaMes.getHours();
      const minutos = this.dataDiaMes.getMinutes();
      const segundos = this.dataDiaMes.getSeconds();
      let cron
      if(this.qualquerMes){
        cron = `${segundos} ${minutos} ${horas} ${diaDoMes} * *`
      }else{
        cron = `${segundos} ${minutos} ${horas} ${diaDoMes} ${mes} *`
      }
      
      console.log(cron)
    }
    cronForm.resetForm()
  }
}

