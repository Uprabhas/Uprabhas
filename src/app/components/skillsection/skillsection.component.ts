import { Component } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";

@Component({
  selector: 'app-skillsection',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './skillsection.component.html',
  styleUrl: './skillsection.component.scss'
})
export class SkillsectionComponent {

}
