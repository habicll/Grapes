import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { Form } from '../form/form';

@Component({
  selector: 'app-contact',
  imports: [Nav, Footer, Form],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
