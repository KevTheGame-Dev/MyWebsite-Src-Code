import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../node_modules/rxjs';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageTypeControlService {

  focusGD: Subject<boolean>;
  focusGD_var: boolean;
  focusGD$: Observable<boolean>;

  constructor(private _router: Router) { 
    let url = _router.url;
    let urlArr = url.split('/');
    this.currentPage = urlArr[urlArr.length - 1].toUpperCase();
    console.log(this.currentPage);
    


    this.focusGD = new Subject<boolean>();
    this.focusGD$ = this.focusGD.asObservable();

    this.focusGD.next(true);
    this.focusGD_var = true;
  }

  currentPage: string = 'BIO';

  setFocusGD(fGD: boolean){
    this.focusGD.next(fGD);
    this.focusGD_var = fGD;
  }

  getFocusGD(){
    return this.focusGD$;
  }

  setCurrentPage(cP: string){
    this.currentPage = cP;
  }

  getCurrentPage(){
    let url = this._router.url;
    let urlArr = url.split('/');
    this.currentPage = urlArr[urlArr.length - 1].toUpperCase();
    return this.currentPage;
  }
}
