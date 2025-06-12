import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projets = [
    {
      nom: 'FlightManager',
      description: 'Application de gestion de vols avec Angular et Laravel.',
      lien: 'https://github.com/tonprofil/flightmanager'
    },
    {
      nom: 'WatchStore',
      description: 'Site e-commerce de montres connectées en Angular.',
      lien: 'https://github.com/tonprofil/watchstore'
    }
  ];
}

