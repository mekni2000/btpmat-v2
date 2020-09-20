import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tous-commande',
  templateUrl: './tous-commande.component.html',
  styleUrls: ['./tous-commande.component.css']
})
export class TousCommandeComponent implements OnInit {
  products = ['','','']

  constructor() { }

  ngOnInit() {
  }

}
