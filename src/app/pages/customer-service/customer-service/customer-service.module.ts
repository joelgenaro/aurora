import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { SharedModule } from '@root/shared/shared.module';
import { HistoryOneComponent } from './components/followup-history/history-one/history-one.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HistoryTwoComponent } from './components/followup-history/history-two/history-two.component';
import { EntitiesControlModule } from '@root/pages/entities-control/entities-control.module';
import { HistoryThreeComponent } from './components/followup-history/history-three/history-three.component';
import { HistoryFourComponent } from './components/followup-history/history-four/history-four.component';
import { LeftBarItemComponent } from './components/left-side-bar/left-bar-item/left-bar-item.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { PolicyInformationComponent } from './components/policy-information/policy-information.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { NotesComponent } from './components/notes/notes.component';
import { PolicyRenewalsCustomerServiceTicketComponent } from './policy-renewals-customer-service-ticket/policy-renewals-customer-service-ticket.component';
import { SalesFlowComponent } from './sales-flow/sales-flow.component';

const routes: Route[] = [
  {
    path: ApplicationRoutes.Empty,
    component: SalesFlowComponent,
  },
];

@NgModule({
  declarations: [
    CustomerServiceComponent,
    HistoryOneComponent,
    ContactViewComponent,
    ContactFormComponent,
    HistoryTwoComponent,
    HistoryThreeComponent,
    HistoryFourComponent,
    LeftBarItemComponent,
    ContactDetailsComponent,
    PolicyInformationComponent,
    LeftSideBarComponent,
    NotesComponent,
    PolicyRenewalsCustomerServiceTicketComponent,
    SalesFlowComponent,
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
