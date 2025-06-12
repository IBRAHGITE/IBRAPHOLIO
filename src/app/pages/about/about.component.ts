import { Component } from '@angular/core';
import { Data } from '../../models/data.model';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutData = Data.about;
  fileUrl: string = this.aboutData.cvLink;
  constructor() {

  }
  openPdf() {
    window.open(this.fileUrl, '_blank');
  }

}
