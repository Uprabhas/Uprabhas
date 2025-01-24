import { Component } from '@angular/core';
import { ProjectComponent } from "../project/project.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectsection',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projectsection.component.html',
  styleUrl: './projectsection.component.scss'
})
export class ProjectsectionComponent {
  projects = [
    {
      title: 'Aquasoil',
      description:
        "Aquasoil, an agriculture-focused application that used for financial analysis, plot mapping, and gross profit analysis based on data that consists of crop cultivation, soil and water parameters, customer demand, and financial calculations for farmers",
      image: '/Aquasoil.png',
      live: 'http://cropdezine.com/',
      skills: [
        'Angular',
        'typescrpti',
        'material UI',
        'Ag-grid',
        'Smart-html',
      ],
    },
    {
      title: 'Workspace-Managament',
      description: 'Workspace-Managament system to allow users to reserve office spaces, manage bookings, and check availability in real-time. Implemented interactive features such as desk selection, floor maps, and calendar integration for a seamless UX.',
      image: '/workspace.png',
      // github: 'https://github.com/Uprabhas/climateapp',
      // live: 'https://climateapp-ten.vercel.app/',
      skills: [
        'Angular',
        'Typescript',
        'Material UI',
        'SCSS'
      ],
    },
    {
      title: 'Anime Atlas',
      description:
        'Developed a comprehensive anime web application that centralizes Anime and Manga information for users.',
      image: '/animeatlas.png',
      github: 'https://github.com/Uprabhas/AnimeAtlas',
      live: 'https://anime-atlas-psi.vercel.app/',
      skills: ['Angular', 'Typescript', 'Scss', 'Material UI', 'Tailwind'],
    },

    {
      title: 'Scroll-croft',
      description:
        'Landing page Enhance the user experience of uI interacting user experience.',
      image: '/blaze.png',
      github: 'https://github.com/Uprabhas/showcase_character',
      live: 'https://swipeanimation.vercel.app/',
      skills: [
        'React JS',
        'Tailwind',
        'Material UI',
        'Javascript',
        'gsap',
      ],
    },

  ];
}
