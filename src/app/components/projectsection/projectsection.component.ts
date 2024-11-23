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
      title: 'Save-To-Drive',
      description:
        'SaveToDrive is a file storage web application. It is designed to provide a seamless experience for users to store and manage their files effortlessly.',
      image: '/assets/saveToDrive.png',
      github: 'https://github.com/deepanshu2711/SaveToDrive',
      live: 'https://save-to-drive.vercel.app/',
      skills: ['Next.js', 'React', 'Firebase', 'MongoDB', 'Tailwind', 'ShadCn'],
    },
    {
      title: 'E-Connect',
      description:
        'A one-to-one Video calling application using WebRtc from scratch which lets you create a room or join a room with roomId and also have a functionality to schedule a meeting with a particular User and users can also view their meeting history',
      image: '/assets/e-connect.jpg',
      github: 'https://github.com/deepanshu2711/E-Connect-WebRTC',
      skills: [
        'React',
        'Node',
        'WebRtc',
        'Websockets',
        'MongoDb',
        'Tailwind',
      ],
    },
    {
      title: 'Discord Clone',
      description:
        'A comprehensive Discord clone featuring real-time messaging, video and audio calling, file uploads, and secure authentication. This platform leverages a robust backend, a real-time database, and cutting-edge communication technology to deliver a seamless user experience.',
      image: '/assets/discord.jpg',
      github: 'https://github.com/deepanshu2711/discord-clone',
      skills: [
        'React',
        'Next.js',
        'Prisma',
        'Socket.io',
        'Supabase',
        'Tailwind',
      ],
    },
    {
      title: 'Genius AI',
      description:
        'Genius AI is a software which uses OpenAI-API to generate text, images, and code snippets based on user prompt. It is built using Nextjs, Shadcn, and Tailwind for styling.',
      image: '/assets/genius2.png',
      github: 'https://github.com/deepanshu2711/Ai_saas',
      live: 'https://ai-saas-three-zeta.vercel.app/',
      skills: [
        'React',
        'Next.js',
        'Clerk',
        'OpenAI',
        'OpenAI API',
        'Shadcn',
        'Tailwind',
      ],
    },
  ];
}
