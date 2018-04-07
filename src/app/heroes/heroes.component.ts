import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // literal object
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  // using 'new' keyword (생성자 함수)
  hero = new Hero();

  constructor() {
    this.hero.id = 1;
    this.hero.name = 'Windstorm';
  }

  ngOnInit() {
  }

}
