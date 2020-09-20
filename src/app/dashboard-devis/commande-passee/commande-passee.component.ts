import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-passee',
  templateUrl: './commande-passee.component.html',
  styleUrls: ['./commande-passee.component.css']
})
export class CommandePasseeComponent implements OnInit {
  products = ['','','']

  constructor() { }

  ngOnInit() {
  }

}
