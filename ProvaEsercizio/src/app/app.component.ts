import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvaEsercizio';
  tot : number = 0;

  OnSum(n: HTMLInputElement):Boolean{
    this.tot = Number(n.value) + this.tot;
    return false;
  }

  OnSuB(n: HTMLInputElement):Boolean{
    this.tot = this.tot - Number(n.value);
    return false;
  }

}
