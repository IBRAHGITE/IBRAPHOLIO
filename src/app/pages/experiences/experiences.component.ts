import { Component } from '@angular/core';
import { Data } from '../../models/data.model';
import { NgClass, NgFor } from '@angular/common';
@Component({
  selector: 'app-experiences',
  imports: [NgFor,NgClass],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experienceData=Data.experiences

}
