import { Component, OnInit} from '@angular/core';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {
  
  selectId:number = 0

  counter:number = 0

 
  nextSlide(){
    if(this.counter < this.projects.length - 1){
      this.counter++ 
    }else{
      this.counter = 0
    }
  }

  backSlide(){
    if(this.counter > 0){
      this.counter--
    }else{
      this.counter = this.projects.length -  1
    }
  }

  constructor() { }
  
  projects: {id: number, name: string, description: string, tech:string[], img:string, github:string}[] = [
    {id: 1, name:'Eatit', description:'Mobile app that allows the user to check the micronutrients in their food', tech:['PSQL', 'Express.js', 'KNEX.js', 'React Native', 'Flexbox', 'Clarifai API', 'USDA API'], img:'/assets/images/eatit.png', github: 'https://github.com/jculver1/capstone'}, {id: 2, name:'Inbox', description:'Email inbox application. The user is able to read and delete messages. The user is also able to mark messages as read and favorite messages.', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'/assets/images/inbox.jpg', github:'https://github.com/jculver1/react-inbox'}, {id: 3, name:'Flashcards App', description:'Flash card app that tests the users knowledge of JS methods. The user can add, delete, and edit flashcards.', tech:['PSQL', 'Express.js', 'Knex.js', 'React.js', 'Bootstrap'], img:'/assets/images/jsflashcards.jpg', github:'https://github.com/jculver1/JS_Flashcards'}, {id: 4, name:'Portfolio 1', description:'Portfolio website.', tech:['Angular', 'Flexbox', 'TypeScript'], img:'/assets/images/portfolio.png', github:'https://github.com/jculver1/Front-end-personal-website'}, {id: 5, name:'Portfolio 2', description:'Portfolio website (current website).', tech:['Angular', 'Flexbox', 'TypeScript', 'Heroku'], img:'/assets/images/portfolio2.png', github:'https://github.com/jculver1/Jessica-Culver-Website'}, {id: 6, name:'Galvanize Shopping Cart', description:'E-commerce website. Allows the user to choose items, add to a shopping cart, check their total, and submit to an API', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'/assets/images/shoppingcart.jpg', github:'https://github.com/jculver1/shoppingCart2'}, {id: 6, name:'Farmers Mark-It', description:'Farmers markit app that allows the user to search by business owner or my product to find vendors at local farmers market. ', tech:['Vue.js', 'Flexbox', 'Express.js', 'PSQL', 'Knex.js'], img:'/assets/images/farmersmarket.png', github:'https://github.com/Mstapleton22/farmers-markit-frontend'},{id: 7, name:'Pixel Art Maker', description:'Pixel art maker. The user can choose colors and make some art!', tech:['JavaScript', 'Flexbox', 'CSS'], img:'/assets/images/pixelart.jpg', github:'https://github.com/jculver1/pixel-art-maker'}, {id: 8, name:'Squirrel Girl', description:'Web App that allows the user to admire quotes and images from Squirrel Girl', tech:['PSQL', 'Express.js', 'KNEX.js', 'React.js', 'Bootstrap'], img:'/assets/images/sg.jpg', github: 'https://github.com/jculver1/Squirrel-Girl-Front-End'}, {id: 9, name:'AELC Website', description:'This website was made for the Auraria Early Learning Center in Denver, CO.', tech:['React.js', 'MD Bootstrap', 'Node.js'], img:'/assets/images/Augustana_Logo.png', github:'https://github.com/jculver1/Rocket-Build'}
  ]


  ngOnInit() {
  }

}
