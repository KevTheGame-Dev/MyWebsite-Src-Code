//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GameHomePageComponent } from './game-home-page/game-home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BioPageComponent } from './bio-page/bio-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

//Materials
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProjectTileComponent } from './project-tile/project-tile.component';


//Routing
const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'my', component: GameHomePageComponent,
    children:[
      {path: '', redirectTo: 'bio', pathMatch: 'full'},
      {path: 'bio', component: BioPageComponent},
      {path: 'projects', component: ProjectsPageComponent},
      {path: 'resume', component: ResumePageComponent}
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GameHomePageComponent,
    NavbarComponent,
    BioPageComponent,
    ProjectsPageComponent,
    ResumePageComponent,
    ProjectTileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    
    //Materials
    MatDividerModule,
    MatGridListModule,
    MatCardModule,

    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
