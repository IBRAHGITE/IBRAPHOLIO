import { Component } from '@angular/core';
import { Data } from '../../models/data.model';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeData = Data.home;

  constructor() {
  }
}
