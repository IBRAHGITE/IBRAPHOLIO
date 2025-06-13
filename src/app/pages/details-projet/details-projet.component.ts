import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-projet',
  imports: [],
  templateUrl: './details-projet.component.html',
  styleUrl: './details-projet.component.scss'
})
export class DetailsProjetComponent {
  TheProject :any;
  constructor(
    private router: Router,
    private route: ActivatedRoute)
    {
    const id = this.route.snapshot.paramMap.get('id')

  }

}
