import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { MainHome } from '../main-home/main-home';
import { Welcoming } from '../welcoming/welcoming';
import { Featured } from '../featured/featured';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Nav, MainHome, Welcoming, Featured, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
