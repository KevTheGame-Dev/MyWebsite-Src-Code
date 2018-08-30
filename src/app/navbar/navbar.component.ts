import { Component, OnInit, Input } from '@angular/core';
import { PageTypeControlService } from '../page-type-control.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private PTCservice: PageTypeControlService) { 
    PTCservice.focusGD$.subscribe((newBool: boolean) => { 
      this.focusGD = newBool;

      if(this.focusGD){
        this.logoSrc = "assets/gameDev-logo-LightTheme.png";
      }
      else{
        this.logoSrc = "assets/software-logo-LightTheme.png";
      }
    });
    this.PTCservice.setFocusGD(this.PTCservice.focusGD_var);
  }

  focusGD: boolean;
  current: string;
  isBio: boolean;
  isProj: boolean;
  isRes: boolean;

  logoSrc: string;

  ngOnInit() {
    this.current = this.PTCservice.getCurrentPage();

    this.updateCurrentTab(this.current);
    
    if(this.focusGD){
      this.logoSrc = "assets/gameDev-logo-LightTheme.png";
    }
    else{
      this.logoSrc = "assets/software-logo-LightTheme.png";
    }
  }

  callUpdateFGD(status: boolean){    
    this.PTCservice.setFocusGD(status);
  }

  updateCurrentTab(tab:string){
    this.current = tab;
    this.PTCservice.setCurrentPage(tab);

    this.isBio = (this.current == 'BIO');
    this.isProj = (this.current == 'PROJECTS');
    this.isRes = (this.current == 'RESUME');
  }

  whichCurrent(tab:string) {
    let cssClasses;

    if(tab === 'BIO' && this.isBio){
      cssClasses = {
        'currentGD': this.focusGD,
        'currentSE': !this.focusGD
      }
    }
    else if(tab === 'PROJECTS' && this.isProj){
      cssClasses = {
        'currentGD': this.focusGD,
        'currentSE': !this.focusGD
      }
    }
    else if(tab === 'RESUME' && this.isRes){
      cssClasses = {
        'currentGD': this.focusGD,
        'currentSE': !this.focusGD
      }
    }
    else{
      cssClasses = {
        'currentGD': false,
        'currentSE': false
      }
    }

    return cssClasses;
  }


  whichTitleCurrent(title:string){
    let cssClasses;

    if(title === 'GD'){
      cssClasses = {
        'GDcurrent': this.focusGD,
        'GDnotcurrent': !this.focusGD,
        'title': true
      }
    }
    else{
      cssClasses = {
        'SEcurrent': !this.focusGD,
        'SEnotcurrent': this.focusGD,
        'title': true
      }
    }

    return cssClasses;
  }

}
