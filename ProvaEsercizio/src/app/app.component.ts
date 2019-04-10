import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvaEsercizio';
  tot : number = 0;

  OnSum(numero: HTMLInputElement):boolean{
    this.tot = Number(numero.value) + this.tot;
    return false;
  }

  OnSuB(numero: HTMLInputElement):boolean{
    this.tot = Number(numero.value) + this.tot;
    return false;
  }

}
