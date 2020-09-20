import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/espace-client/shared/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  @Input() user
  constructor(private auht: AuthService) { }

  ngOnInit() {
  }

}
