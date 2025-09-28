import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  constructor(private router: Router){ }

  onHome(): void {
    this.router.navigateByUrl('');
  }  
  onCatalog(): void {
    this.router.navigateByUrl('catalog');
  }  
  onAbout(): void {
    this.router.navigateByUrl('about');
  }  
  onContact(): void {
    this.router.navigateByUrl('contact');
  }

}
