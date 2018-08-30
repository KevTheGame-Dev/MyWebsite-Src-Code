import { Component, Input, OnInit, AfterViewInit, ViewChild, ViewChildren, HostListener, ElementRef, QueryList} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PageTypeControlService } from '../page-type-control.service';

export type Project = { 
  projectName: string,
  projectType: string,
  shortDescription: string,
  longDescription: string,
  imageURL: string,
  downloadFile: string,
  githubURL: string
};

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {

  projData: Array<Project>;
  gridCol: number = 4;
  rowHeight: number = 300;
  focusGD: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    if(window.innerWidth >= 300){
      let tempGridCol = window.innerWidth / 300;
      tempGridCol = Math.floor(tempGridCol);
      
      if(tempGridCol > 4) tempGridCol = 4;
      this.gridCol = tempGridCol;
    }
    else{
      
    }
  }

  constructor(private http:HttpClient, private PTCservice: PageTypeControlService) {
    PTCservice.focusGD$.subscribe((newBool: boolean) => { 
      this.focusGD = newBool;
      
      this.http.get('./assets/projects.json').pipe(map(data => data as Array<Project>)).subscribe(result => {
        this.projData = result;
        
        if(this.focusGD){
          this.projData = this.projData.sort((a, b) => a.projectType.localeCompare(b.projectType));
        }
        else{
          this.projData = this.projData.sort((b, a) => a.projectType.localeCompare(b.projectType));
        }
      });
    });
    
    this.PTCservice.setFocusGD(this.PTCservice.focusGD_var);

    this.http.get('../assets/projects.json').pipe(map(data => data as Array<Project>)).subscribe(result => {
      this.projData = result;
      
      if(this.focusGD){
        this.projData = this.projData.sort((a, b) => a.projectType.localeCompare(b.projectType));
      }
      else{
        this.projData = this.projData.sort((b, a) => a.projectType.localeCompare(b.projectType));
      }
    });
  }

  ngOnInit() {
    if(window.innerWidth >= 300){
      let tempGridCol = window.innerWidth / 300;
      tempGridCol = Math.floor(tempGridCol);
      
      if(tempGridCol > 4) tempGridCol = 4;
      this.gridCol = tempGridCol;
    }
    else{
      
    }
  }

  ngAfterViewInit(){
  }

}
