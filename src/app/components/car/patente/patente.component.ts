import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patente',
  templateUrl: './patente.component.html',
  styleUrls: ['./patente.component.css']
})
export class PatenteComponent implements OnInit {

  constructor() { }

  @Input() patente = '';

  ngOnInit(): void {
  }

  reprocess() {
    if (this.patente.length === 6) {
      console.log(this.patente.substring(0,3))
    }

  }

}
