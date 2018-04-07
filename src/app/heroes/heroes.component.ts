import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../HEROES';
import {HeroService} from '../hero.service';

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
  // hero = new Hero();
  heroes: Hero[];
  selectedHero: Hero;

  // 2) 서비스를 생성자로 주입
  constructor(private heroService: HeroService) {
    /*this.hero.id = 1;
    this.hero.name = 'Windstorm';*/
  }

  ngOnInit() {
    // 서비스 호출
    // 1) 잘못된 방법: 의존성이 생긴다. 컴포넌트가 서비스를 제어하게 되므로.
    /*const heroService = new HeroService();
    this.heroes = heroService.getHeroes();*/
    this.heroes = this.heroService.getHeroes();


  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
