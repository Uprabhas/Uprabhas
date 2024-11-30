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
        'SaveToDrive is a file storage web application. It is designed to provide a seamless experience for users to store and manage their files effortlessly.',
      image: '/animeatlas.png',
      github: 'https://github.com/Uprabhas/AnimeAtlas',
      live: 'https://anime-atlas-psi.vercel.app/',
      skills: ['Angular', 'Typescript', 'Scss', 'Material UI', 'Tailwind'],
    },
    {
      title: 'portfoilo',
      description:
        'A one-to-one Video calling application using WebRtc from scratch which lets you create a room or join a room with roomId and also have a functionality to schedule a meeting with a particular User and users can also view their meeting history',
      image: '/portfolio.png',
      github: 'https://github.com/Uprabhas/Uprabhas',
      skills: [
        'Angular',
        'typescrpti',
        'material UI',
        'Taliwind',
      ],
    },
    {
      title: 'Weather-app',
      description:
        'Genius AI is a software which uses OpenAI-API to generate text, images, and code snippets based on user prompt. It is built using Nextjs, Shadcn, and Tailwind for styling.',
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
        'A comprehensive Discord clone featuring real-time messaging, video and audio calling, file uploads, and secure authentication. This platform leverages a robust backend, a real-time database, and cutting-edge communication technology to deliver a seamless user experience.',
      image: '/moblie.png',
      github: 'https://github.com/deepanshu2711/discord-clone',
      skills: [
        'Angular',
        'ionic',
        'Android',
        'Typescrpit',
        'Material UI',
        'Tailwind',
      ],
    },
    
  ];
}
