
import { RouterOutlet } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { BlurbackComponent } from './components/blurback/blurback.component';
import { MyComponent } from './components/my/my.component';
import { AboutComponent } from './components/about/about.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { EducationsectionComponent } from './components/educationsection/educationsection.component';
import { SkillsectionComponent } from './components/skillsection/skillsection.component';
import { ProjectsectionComponent } from './components/projectsection/projectsection.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Coordinates {
  x: number;
  y: number;
}

interface CircleElement extends HTMLElement {
  x: number;
  y: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TabComponent,
    BlurbackComponent,
    MyComponent,
    AboutComponent,
    WorkexperienceComponent,
    EducationsectionComponent,
    SkillsectionComponent,
    ProjectsectionComponent,
    ContactComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Uprabhas';

  coords: Coordinates = { x: 0, y: 0 };
  colors: string[] = [
    '#F0FFFE', // Very Light Blue
    '#DAECF5', // Pale Blue
    '#C0E5FE', // Soft Blue
    '#90CCFE', // Light Blue
    '#87CEFB', // Sky Blue
    '#60B2FE', // Brighter Sky Blue
    '#57F2FF', // Vibrant Aqua Blue
    '#45BDEE', // Bright Cyan
    '#2BDDF9', // Turquoise Blue
    '#28A7EA', // Standard Blue
    '#3099FE', // Moderate Blue
    '#4467C4', // Deep Blue
    '#659BDF', // Cool Blue
    '#007FFE', // Strong Blue
    '#015CE0', // Intense Blue
    '#2234A8', // Navy Blue
    '#73A5C6', // Muted Blue
    '#BCD2E8', // Subtle Pale Blue
    '#91BAD6', // Softened Blue
  ];
  

  @ViewChildren('circle') circles!: QueryList<ElementRef<CircleElement>>;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      if (this.circles.length === 0) {
        console.error('No circles found. Ensure the #circle reference is in the template.');
        return;
      }
  
      this.circles.forEach((circle, index) => {
        const el = circle.nativeElement;
        el.x = 0;
        el.y = 0;
        el.style.backgroundColor = this.colors[index % this.colors.length];
      });
  
      this.animateCircles();
    }
  }
  

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isBrowser) {
      this.coords.x = event.clientX;
      this.coords.y = event.clientY;
    }
  }

  private animateCircles(): void {
    if (!this.isBrowser) return;

    let x = this.coords.x;
    let y = this.coords.y;

    this.circles.forEach((circle, index) => {
      const el = circle.nativeElement;

      el.style.left = `${x - 12}px`;
      el.style.top = `${y - 12}px`;
      el.style.transform = `scale(${(this.circles.length - index) / this.circles.length})`;

      el.x = x;
      el.y = y;

      const nextCircle = this.circles.toArray()[index + 1]?.nativeElement || this.circles.first.nativeElement;
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(() => this.animateCircles());
  }
}
