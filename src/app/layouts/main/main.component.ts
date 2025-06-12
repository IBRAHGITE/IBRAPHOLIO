import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from "../../pages/about/about.component";
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { SkillsComponent } from '../../pages/skills/skills.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { HomeComponent } from '../../pages/home/home.component';
import { initScrollReveal } from '../../shared/scrollreveal.service';
@Component({
  selector: 'app-main',
  imports: [NavbarComponent, FooterComponent, RouterOutlet, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initScrollReveal();
  }
}
