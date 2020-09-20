import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produit-destockage',
  templateUrl: './produit-destockage.component.html',
  styleUrls: ['./produit-destockage.component.css']
})
export class ProduitDestockageComponent implements OnInit {

  @Input() product

  constructor() { }

  ngOnInit() {
  }

}
