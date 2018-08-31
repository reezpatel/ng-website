import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  text = '';
  index = -1;
  toShow = 'Hi, I am Reez. These are Some of My Works.';
  interval: any;

  showProjects = false;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.index++;
      if (this.index === this.toShow.length) {
        clearInterval(this.interval);
        this.showProjects = true;
        return;
      }
      if(this.toShow[this.index] == ' ') {
        this.index++;
        this.text += ' ';
      }
      this.text += this.toShow[this.index];
    }, 100);
  }

}
