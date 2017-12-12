import { Routes, RouterModule } from '@angular/router';
import { OrganizersComponent } from "./organizers.component";

const Org_Router: Routes = [
    { 
        path: '',
        component: OrganizersComponent
    }
];

export const orgRouter = RouterModule.forChild(Org_Router);