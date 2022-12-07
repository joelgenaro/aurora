import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationComponent } from './components/information/information.component';
import { SharedModule } from '@root/shared/shared.module';
import { HistoryOneComponent } from './components/history-one/history-one.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { SelectNoteComponent } from './components/select-note/select-note.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HistoryTwoComponent } from './components/history-two/history-two.component';
import { EntitiesControlModule } from '@root/pages/entities-control/entities-control.module';
import { HistoryThreeComponent } from './components/history-three/history-three.component';
import { HistoryFourComponent } from './components/history-four/history-four.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { LeftBarItemComponent } from './components/left-bar-item/left-bar-item.component';
import { CustomerServiceTicketOneComponent } from './customer-service-ticket-one/customer-service-ticket-one.component';
import { CustomerServiceTicketTwoComponent } from './customer-service-ticket-two/customer-service-ticket-two.component';
import { CustomerServiceTicketThreeComponent } from './customer-service-ticket-three/customer-service-ticket-three.component';
import { CustomerServiceTicketFourComponent } from './customer-service-ticket-four/customer-service-ticket-four.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';

const routes: Route[] = [
  {
    path: ApplicationRoutes.CustomerService,
    component: CustomerServiceComponent,
  },
  {
    path: ApplicationRoutes.CustomerServiceTicketOne,
    component: CustomerServiceTicketOneComponent,
  },
  {
    path: ApplicationRoutes.CustomerServiceTicketTwo,
    component: CustomerServiceTicketTwoComponent,
  },
  {
    path: ApplicationRoutes.CustomerServiceTicketThree,
    component: CustomerServiceTicketThreeComponent,
  },
  {
    path: ApplicationRoutes.CustomerServiceTicketFour,
    component: CustomerServiceTicketFourComponent,
  },
];

@NgModule({
  declarations: [
    CustomerServiceComponent,
    TopbarComponent,
    HeaderComponent,
    InformationComponent,
    HistoryOneComponent,
    FilterInputComponent,
    SelectNoteComponent,
    ContactViewComponent,
    ContactFormComponent,
    HistoryTwoComponent,
    HistoryThreeComponent,
    HistoryFourComponent,
    LeftBarComponent,
    LeftBarItemComponent,
    CustomerServiceTicketOneComponent,
    CustomerServiceTicketTwoComponent,
    CustomerServiceTicketThreeComponent,
    CustomerServiceTicketFourComponent,
    RightSideBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    EntitiesControlModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerServiceModule { }
