import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi .',
      image: './assets/spotify_h52e.png',
      url: '',
    },
    {
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: './assets/chatbot.jfif',
      url: '',
    },
    {
      title: 'Project 3',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: './assets/ecommerce-logo-icon-free-vector.jpg',
      url: '',
    }
    // Add more projects as needed
  ];
}




