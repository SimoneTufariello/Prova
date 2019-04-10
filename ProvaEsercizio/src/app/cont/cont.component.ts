import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit {
  @Input() ris : number = 0;
  constructor() { }


  ngOnInit() {
  }

}
