import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path : '', component: Home},
    {path : 'catalog', component: Catalog},
    {path : 'about', component: About},
    {path : 'contact', component: Contact}

];
