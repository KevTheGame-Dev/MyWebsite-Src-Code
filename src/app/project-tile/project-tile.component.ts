import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit {

  constructor() { }

  @Input() projectName: String;
  @Input() projectType: string;
  @Input() shortDescription: string;
  @Input() longDescription: string;
  @Input() imageURL: string;
  @Input() downloadFile: string;
  @Input() githubURL: string;

  ngOnInit() {
  }

}
