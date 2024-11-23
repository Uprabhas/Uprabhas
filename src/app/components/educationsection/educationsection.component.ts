import { Component, Input } from '@angular/core';
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-educationsection',
  standalone: true,
  imports: [EducationComponent],
  templateUrl: './educationsection.component.html',
  styleUrl: './educationsection.component.scss'
})
export class EducationsectionComponent {
 
}
