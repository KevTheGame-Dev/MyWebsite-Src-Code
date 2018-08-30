import { Component, OnInit } from '@angular/core';
import { PageTypeControlService } from '../page-type-control.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private PTCservice: PageTypeControlService) { }

  ngOnInit() {
  }

  callUpdateFGD(status: boolean){
    this.PTCservice.setFocusGD(status);
  }
}
