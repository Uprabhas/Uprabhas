import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.scss'
})
export class WorkexperienceComponent {
  isOpen = false;

  responsibilities = [
    'Building and maintaining scalable and high-performance web applications with Next.js and React.',
    'Implementing best practices to ensure fast loading times and smooth interactions across various devices.',
    'Working closely with design and backend teams to deliver seamless integration and innovative solutions for complex problems.',
  ];

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
