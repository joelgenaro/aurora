import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationComponent } from './components/information/information.component';
import { SharedModule } from '@root/shared/shared.module';


const routes: Route[] = [
  {
    path: ApplicationRoutes.Empty,
    component: CustomerServiceComponent,
  }
];

@NgModule({
  declarations: [
    CustomerServiceComponent,
    TopbarComponent,
    HeaderComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerServiceModule { }
