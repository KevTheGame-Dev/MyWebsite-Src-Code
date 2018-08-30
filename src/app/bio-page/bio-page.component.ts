import { Component, OnInit} from '@angular/core';
import { PageTypeControlService } from '../page-type-control.service';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.css']
})
export class BioPageComponent implements OnInit {

  constructor(private PTCservice: PageTypeControlService) {    
    PTCservice.focusGD$.subscribe((newBool: boolean) => { 
      this.focusGD = newBool; 
    });
    this.PTCservice.setFocusGD(this.PTCservice.focusGD_var);
  }

  focusGD: boolean;

  ngOnInit() {
  }
}
