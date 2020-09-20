import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { map, reduce, scan, distinctUntilChanged, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-passe-commande-panier',
  templateUrl: './passe-commande-panier.component.html',
  styleUrls: ['./passe-commande-panier.component.css']
})
export class PasseCommandePanierComponent implements OnInit {
  closeResult: string;
  @Input() products
  total
  constructor(    private modalService: NgbModal,) { }

  ngOnInit() {
  }
  open(content, product) {
   
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'})
    this.products = product
   
    from(this.products)
    .pipe(
      map((product:any) => product.total),
      scan((acc, curr) => acc + curr, 0),
      shareReplay(1)
      )

    .subscribe(totals => {
      this.total = totals
    })

    


  }
  open2(content2) {
   
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title', size: 'md'}
    
    ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
     
    });

  }



 

}
