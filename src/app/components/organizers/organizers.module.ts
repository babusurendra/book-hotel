import { NgModule } from '@angular/core';
import { OrganizersComponent } from "./organizers.component";

import { orgRouter } from './organizers.router';

@NgModule({
  declarations: [ OrganizersComponent ],
  imports: [ orgRouter ]
})

export class OrgModule {}