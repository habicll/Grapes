import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { Know } from '../know/know';
import { Presentation } from '../presentation/presentation';
import { Company } from '../company/company';

@Component({
  selector: 'app-about',
  imports: [Nav, Footer, Know, Presentation, Company],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
