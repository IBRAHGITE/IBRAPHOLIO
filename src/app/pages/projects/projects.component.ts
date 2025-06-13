import { Component } from '@angular/core';
import { Data } from '../../models/data.model';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-projects',
  imports: [NgClass,RouterLink,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projets = Data.projects
  selectedProject: any = null;

  openProjectModal(idprojet: number) {
    setTimeout(() => {
    this.selectedProject = idprojet;
  }, 500);
  }

}

