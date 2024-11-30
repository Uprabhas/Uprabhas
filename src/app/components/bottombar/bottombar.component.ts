import { Component } from '@angular/core';
import { FloatingDockComponent } from "../floating-dock/floating-dock.component";

@Component({
  selector: 'app-bottombar',
  standalone: true,
  imports: [FloatingDockComponent],
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.scss'
})
export class BottombarComponent {
  data = [
    {
      title: 'Resume',
      icon: 'file-text',
      href: '/Resume latest.pdf'
    },
    {
      title: 'Github',
      icon: 'github',
      href: 'https://github.com/Uprabhas'
    },
    {
      title: 'Twitter',
      icon: 'twitter',
      href: 'https://x.com/DeepanshuS7943'
    },
    {
      title: 'Linkedin',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/prabhasutla/'
    },
    {
      title: 'Mail',
      icon: 'mail',
      href: 'mailto:prabashutla111@gmail.com'
    },
  ];
}
