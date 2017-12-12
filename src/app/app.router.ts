import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: 'home',
        loadChildren: 'app/components/home/home.module#HomeModule'
    },
    {
        path: 'organizers',
        loadChildren: 'app/components/organizers/organizers.module#OrgModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);