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
    {
      title: 'E-cart',
      description:
        'Our e-commerce website offers a seamless online shopping experience, providing a wide range of products across multiple categories, including electronics, fashion, home decor, beauty, and more.',
      image: '/ecart.png',
      github: 'https://github.com/Uprabhas/e-cart',
      skills: [
        'Angular',
        'typescrpti',
        'material UI',
        'Scss',
      ],
    },
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
