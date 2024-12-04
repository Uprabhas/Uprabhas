import { Component } from '@angular/core';
import { ProjectComponent } from "../project/project.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectsection',
  standalone: true,
  imports: [ProjectComponent,CommonModule],
  templateUrl: './projectsection.component.html',
  styleUrl: './projectsection.component.scss'
})
export class ProjectsectionComponent {
  projects = [
    {
      title: 'Anime Atlas',
      description:
        'Developed a comprehensive anime web application that centralizes Anime and Manga information for users.',
      image: '/animeatlas.png',
      github: 'https://github.com/Uprabhas/AnimeAtlas',
      live: 'https://anime-atlas-psi.vercel.app/',
      skills: ['Angular', 'Typescript', 'Scss', 'Material UI', 'Tailwind'],
    },
    // {
    //   title: 'portfoilo',
    //   description:
    //     'A one-to-one Video calling application using WebRtc from scratch which lets you create a room or join a room with roomId and also have a functionality to schedule a meeting with a particular User and users can also view their meeting history',
    //   image: '/portfolio.png',
    //   github: 'https://github.com/Uprabhas/Uprabhas',
    //   skills: [
    //     'Angular',
    //     'typescrpti',
    //     'material UI',
    //     'Taliwind',
    //   ],
    // },
    {
      title: 'Weather-app',
      description:'The weather application was implemented to provide climate information using geolocation & search city`s, fetching location-based climate data from the database.',
      image: '/climate.png',
      github: 'https://github.com/Uprabhas/climateapp',
      live: 'https://climateapp-ten.vercel.app/',
      skills: [
        'React',
        'Tailwind',
        'Material UI',
        'search opitimed'
      ],
    },
    {
      title: 'spend wise',
      description:
        'This application helps you track all your expenses from bank accounts and UPI apps, displaying them in one place.',
      image: '/moblie.png',
      github: 'https://github.com/deepanshu2711/discord-clone',
      skills: [
        'Angular',
        'ionic',
        'capacitor',
        'Android',
        'Typescrpit',
        'Material UI',
        'Tailwind',
      ],
    },
    
  ];
}
