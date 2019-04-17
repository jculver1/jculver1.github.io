import { Component, OnInit} from '@angular/core';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {
  
  isCollapsed:boolean = false;

  selectId:number = 0

  counter:number = 0

  toggleCollapse(id){
    this.selectId = id 
    !this.isCollapsed 
  }

  nextSlide(){
    if(this.counter < this.projects.length){
      this.counter++ 
    }else{
      this.counter = 0
    }
  }

  backSlide(){
    if(this.counter > 0){
      this.counter--
    }else{
      this.counter = this.projects.length 
    }
  }

  constructor() { }
  
  projects: {id: number, name: string, description: string, tech:string[], img:string, github:string}[] = [
    {id: 1, name:'Eatit', description:'Mobile app that allows the user to check the micronutrients in their food', tech:['PSQL', 'Express.js', 'KNEX.js', 'React Native', 'Flexbox', 'Clarifai API', 'USDA API'], img:'/assets/images/eatit.png', github: 'https://github.com/jculver1/capstone'}, {id: 2, name:'Inbox', description:'Email inbox application. The user is able to read and delete messages. The user is also able to mark messages as read and favorite messages.', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'/assets/images/inbox.jpg', github:'https://github.com/jculver1/react-inbox'}, {id: 3, name:'Flashcards App', description:'Flash card app that tests the users knowledge of JS methods. The user can add, delete, and edit flashcards.', tech:['PSQL', 'Express.js', 'Knex.js', 'React.js', 'Bootstrap'], img:'/assets/images/jsflashcards.jpg', github:'https://github.com/jculver1/JS_Flashcards'}, {id: 4, name:'Portfolio 1', description:'Portfolio website(the first one).', tech:['Angular', 'Flexbox', 'TypeScript'], img:'/assets/images/portfolio.png', github:'https://github.com/jculver1/Front-end-personal-website'}, , {id: 6, name:'Portfolio (current)', description:'Portfolio website.', tech:['Angular', 'Flexbox', 'TypeScript'], img:'/assets/images/portfolio.png', github:'https://github.com/jculver1/Front-end-personal-website'}, {id: 7, name:'Galvanize Shopping Cart', description:'Web application that allows the user to add items to a shopping cart and submit to an API. ', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'/assets/images/shoppingcart.jpg', github:''}, {id: 6, name:'Farmers Mark-It', description:'Farmers markit app that allows the user to search by business owner or my product to find vendors at local farmers market. ', tech:['Vue.js', 'Flexbox', 'Express.js', 'PSQL', 'Knex.js'], img:'/assets/images/farmersmarket.png', github:'https://github.com/Mstapleton22/farmers-markit-frontend'},{id: 8, name:'Howlr', description:'A todo list application with a motherly tone.', tech:['React.js', 'Materialize', 'Express.js', 'PSQL', 'Knex.js'], img:'/assets/images/howlr.jpg', github:'https://github.com/metalcouer/Howlr-Frontends'},{id: 9, name:'Pixel Art Maker', description:'Pixel art maker. The user can choose colors and make some art!', tech:['Vanilla JavaScript', 'Flexbox', 'CSS'], img:'/assets/images/pixelart.jpg', github:'https://github.com/jculver1/pixel-art-maker'}, {id: 10, name:'Squirrel Girl', description:'Web App that allows the user to admire quotes and images from Squirrel Girl', tech:['PSQL', 'Express.js', 'KNEX.js', 'React.js', 'Bootstrap'], img:'/assets/images/sg.jpg', github: 'https://github.com/jculver1/Squirrel-Girl-Front-End'}
  ]



  // projects:object[] = [
  //   {id: 1, name:'Eatit', description:'Mobile app that allows the user to check the micronutrients in their food', tech:['PSQL', 'Express.js', 'KNEX.js', 'React Native', 'Flexbox', 'Clarifai API', 'USDA API'], img:'/assets/images/eatit.png', github: 'https://github.com/jculver1/capstone'}, {id: 2, name:'Inbox', description:'Email inbox application. The user is able to read and delete messages. The user is also able to mark messages as read and favorite messages.', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'/assets/images/inbox.jpg', github:'https://github.com/jculver1/react-inbox'}, {id: 3, name:'Flashcards App', description:'Flash card app that tests the users knowledge of JS methods. The user can add, delete, and edit flashcards.', tech:['PSQL', 'Express.js', 'Knex.js', 'React.js', 'Bootstrap'], img:'/assets/images/jsflashcards.jpg', github:'https://github.com/jculver1/JS_Flashcards'}, {id: 4, name:'Portfolio 1', description:'Portfolio website(the first one).', tech:['Angular', 'Flexbox', 'TypeScript'], img:'/assets/images/portfolio.png', github:'https://github.com/jculver1/Front-end-personal-website'}, , {id: 6, name:'Portfolio (current)', description:'Portfolio website.', tech:['Angular', 'Flexbox', 'TypeScript'], img:'/assets/images/portfolio.png', github:'https://github.com/jculver1/Front-end-personal-website'}, {id: 7, name:'Galvanize Shopping Cart', description:'Web application that allows the user to add items to a shopping cart and submit to an API. ', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'/assets/images/shoppingcart.jpg', github:''}, {id: 6, name:'Farmers Mark-It', description:'Farmers markit app that allows the user to search by business owner or my product to find vendors at local farmers market. ', tech:['Vue.js', 'Flexbox', 'Express.js', 'PSQL', 'Knex.js'], img:'/assets/images/farmersmarket.png', github:'https://github.com/Mstapleton22/farmers-markit-frontend'},{id: 8, name:'Howlr', description:'A todo list application with a motherly tone.', tech:['React.js', 'Materialize', 'Express.js', 'PSQL', 'Knex.js'], img:'/assets/images/howlr.jpg', github:'https://github.com/metalcouer/Howlr-Frontends'},{id: 9, name:'Pixel Art Maker', description:'Pixel art maker. The user can choose colors and make some art!', tech:['Vanilla JavaScript', 'Flexbox', 'CSS'], img:'/assets/images/pixelart.jpg', github:'https://github.com/jculver1/pixel-art-maker'}, {id: 10, name:'Squirrel Girl', description:'Web App that allows the user to admire quotes and images from Squirrel Girl', tech:['PSQL', 'Express.js', 'KNEX.js', 'React.js', 'Bootstrap'], img:'/assets/images/sg.jpg', github: 'https://github.com/jculver1/Squirrel-Girl-Front-End'}
  // ]

  ngOnInit() {
  }

}
