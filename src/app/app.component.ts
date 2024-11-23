import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { BlurbackComponent } from './components/blurback/blurback.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { MyComponent } from './components/my/my.component';
import { AboutComponent } from './components/about/about.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { EducationsectionComponent } from './components/educationsection/educationsection.component';
import { SkillsectionComponent } from './components/skillsection/skillsection.component';
import { ProjectsectionComponent } from './components/projectsection/projectsection.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TabComponent,
    BlurbackComponent,
    BottombarComponent,
    MyComponent,
    AboutComponent,
    WorkexperienceComponent,
    EducationsectionComponent,
    SkillsectionComponent,
    ProjectsectionComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Uprabhas';
}
