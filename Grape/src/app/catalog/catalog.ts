import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { MainCatalog } from '../main-catalog/main-catalog';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-catalog',
  imports: [Nav, MainCatalog, Footer],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {

}
