import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-featured',
  imports: [],
  templateUrl: './featured.html',
  styleUrl: './featured.css'
})
export class Featured implements OnInit{

  ngOnInit(): void {
  }

  constructor(private router: Router){ }

  onContinue(): void {
    this.router.navigateByUrl('catalog');
  }

}
