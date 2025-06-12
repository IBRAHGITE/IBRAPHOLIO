import { Component } from '@angular/core';
import { Data } from '../../models/data.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsData = Data.skills;
  constructor() {
    console.log('Skills Data:', this.skillsData);
  }
}
