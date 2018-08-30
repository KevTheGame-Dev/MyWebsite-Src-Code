import { Component, OnInit} from '@angular/core';
import { PageTypeControlService } from '../page-type-control.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit{

  constructor(private PTCservice: PageTypeControlService) { 
    PTCservice.focusGD$.subscribe((newBool: boolean) => { 
      this.focusGD = newBool; 
    });
    
    this.PTCservice.setFocusGD(this.PTCservice.focusGD_var);
  }

  focusGD: boolean;
  pdfSrc: string = '../assets/Barrett_Kevin Resume.pdf';

  ngOnInit() {

  }
}
