import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { EntitiesControlComponent } from './components/entities-control/entities-control.component';
import { AddEntityComponent } from './components/add-entity/add-entity.component';
import { SharedModule } from '@root/shared/shared.module';

const routes: Route[] = [
  {
    path: ApplicationRoutes.EntitiesControl,
    component: EntitiesControlComponent,
  }
];

@NgModule({
  declarations: [
    EntitiesControlComponent,
    AddEntityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EntitiesControlModule { 
  
}
