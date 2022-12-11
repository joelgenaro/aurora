import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SharedModule } from '@root/shared/shared.module';
import { HistoryOneComponent } from './components/followup-history/history-one/history-one.component';
import { SelectNoteComponent } from './components/select-note/select-note.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HistoryTwoComponent } from './components/followup-history/history-two/history-two.component';
import { EntitiesControlModule } from '@root/pages/entities-control/entities-control.module';
import { HistoryThreeComponent } from './components/followup-history/history-three/history-three.component';
import { HistoryFourComponent } from './components/followup-history/history-four/history-four.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { LeftBarItemComponent } from './components/left-bar-item/left-bar-item.component';
import { CustomerServiceTicketOneComponent } from './customer-service-ticket-one/customer-service-ticket-one.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { PolicyInformationComponent } from './components/policy-information/policy-information.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';

const routes: Route[] = [
  {
    path: ApplicationRoutes.CustomerService,
    component: CustomerServiceTicketOneComponent,
  },
];

@NgModule({
  declarations: [
    CustomerServiceComponent,
    TopbarComponent,
    HistoryOneComponent,
    SelectNoteComponent,
    ContactViewComponent,
    ContactFormComponent,
    HistoryTwoComponent,
    HistoryThreeComponent,
    HistoryFourComponent,
    LeftBarComponent,
    LeftBarItemComponent,
    CustomerServiceTicketOneComponent,
    ContactDetailsComponent,
    PolicyInformationComponent,
    LeftSideBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    EntitiesControlModule,
    CdkAccordionModule,
    RouterModule.forChild(routes),
  ],
})
export class CustomerServiceModule {}
