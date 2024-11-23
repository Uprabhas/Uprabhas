import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input() degree!: string;
  @Input() name!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() image!: string;
}
