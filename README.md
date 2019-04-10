# Prova
--------APP COMPONENT--------
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'complete-calc';
    r: number;
    num_vett : number[];
    somma(n1: HTMLInputElement, n2: HTMLInputElement) :Boolean {
        this.r = Number(n1.value) + Number(n2.value);

        this.fillVect(Number(n1.value), Number(n2.value));
        return false;
    }

    fillVect(n1: number, n2:number)
    {
        //Se n2< n1 li scambio
        if (n1<n2) {
            let a = n2;
            n2 = n1;
            n2= a;
        }
        this.num_vett = new Array<number>();
        for(let i = n1; i <=n2; i++)
        {
            console.log(i);
            this.num_vett.push(i);
        }
    }

}




--------- HTML COMPONENT -----------
<h2>calcolatrice</h2>
<form>
	<input type=number #n1>
    <input type=number #n2>
    <button (click)="somma(n1,n2)">+</button>
</form>
<hr>
<app-ris *ngIf="r" [ris] = "r" [n_vet]="num_vett"></app-ris>







-------------- ris COMPONENT -----------
  import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {

  @Input() ris : number;
  @Input() n_vet : number[];
  constructor() { }

  ngOnInit() {
  }



}




---------- ris HTML -------------
  ris: {{ris}}
  <br>
  <span *ngFor="let a of n_vet"> {{a}} |</span>
  
  
  
  
  
  
  
  
  
  
  
  
 --------- APP COMPONENT ---------
 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  extractedNumber: number;
  arrayNumbers: number[];

  constructor() {
    this.arrayNumbers = [];
  }

  ngOnInit() {
  }

  estrai(numeroString: HTMLInputElement): void {
    let numeroInt = Number(numeroString.value);
    
    if (numeroInt !== this.extractedNumber && !isNaN(numeroInt)) {
      this.extractedNumber = numeroInt;
      this.arrayNumbers.push(numeroInt); 
    }
  }
}






----------------- COMPONENT HTML --------------
<div class="form-group d-inline-block w-25">
  <input type="text" class="form-control border-primary" id="number" name="number" #newNumber>
</div>
<span class="pl-3">Dimmi un numero</span>
<button (click)="estrai(newNumber)" class="btn btn-primary d-block">Estrai</button>
<br>
<app-cartella [extractedNumber]="extractedNumber"></app-cartella>
<ul class="list-inline">
  <li class="list-inline-item mr-4 mt-4 border rounded p-1" *ngFor="let number of arrayNumbers">{{ number }}</li>
</ul>









-------------- cartella COMPONENT --------------
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartella',
  templateUrl: './cartella.component.html',
  styleUrls: ['./cartella.component.css']
})
export class CartellaComponent implements OnInit {
  
  @Input() extractedNumber: number;

  constructor() { }

  ngOnInit() {
  }

}






------------------- cartella HTML ------------------------
<div class="border rounded d-inline-block p-1"> {{ extractedNumber }} </div>
<div class="d-inline-block pl-3">Ultimo numero estratto</div>
