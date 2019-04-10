import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects:object[] = [
    {id: 1, name:'Squirrel Girl', description:'Web App that allows the user to admire quotes and images from Squirrel Girl', tech:['PSQL', 'Express.js', 'KNEX.js', 'React.js', 'Bootstrap'], img:'/assets/images/sg.jpg', github:''}, {id: 2, name:'Inbox', description:'general inbox app, CRUD app', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'/assets/images/inbox.jpg', github:''}, {id: 3, name:'Flashcards App', description:'Flash card app that tests the users knowledge of JS methods. The user can add, delete, and edit flashcards.', tech:['PSQL', 'Express.js', 'Knex.js', 'React.js', 'Bootstrap'], img:'/assets/images/jsflashcards.jpg', github:''}, {id: 4, name:'Portfolio', description:'Portfolio sight (current website).', tech:['Angular', 'Flexbox', 'TypeScript'], img:'/assets/images/portfolio.png', github:'https://github.com/jculver1/Front-end-personal-website'}, {id: 5, name:'Galvanize Shopping Cart', description:'Web application that allows the user to add items to a shopping cart and submit to an API. ', tech:['React', 'Bootstrap', 'Galvanize API'], img:'/assets/images/shoppingcart.jpg', github:''}, {id: 6, name:'Farmers Mark-It', description:'Farmers markit app that allows the user to search by business owner or my product to find vendors at local farmers market. ', tech:['Vue.js', 'Flexbox', 'Express.js', 'PSQL', 'Knex.js'], img:'/assets/images/farmersmarket.png', github:'https://github.com/Mstapleton22/farmers-markit-frontend'},{id: 7, name:'Howlr', description:'A todo list application with a motherly tone.', tech:['React', 'Materialize', 'Express.js', 'PSQL', 'Knex.js'], img:'/assets/images/howlr.jpg', github:''},{id: 8, name:'Pixel Art Maker', description:'Pixel art maker. The user can choose colors and make some art!', tech:['Vanilla JavaScript', 'Flexbox', 'CSS'], img:'/assets/images/pixelart.jpg', github:''}
  ]

  ngOnInit() {
  }

}
