import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";

const Home_Router: Routes = [
    { 
        path: '/',
        component: HomeComponent
    }
];

export const homeRouter = RouterModule.forChild(Home_Router);