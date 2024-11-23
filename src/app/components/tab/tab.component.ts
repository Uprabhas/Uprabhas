import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    CommonModule ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  isScrolledDown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolledDown = window.scrollY > 0;
  }

  ngOnInit(): void {
    // Additional initialization logic can go here if needed
  }
}
