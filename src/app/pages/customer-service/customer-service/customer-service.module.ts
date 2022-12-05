import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
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
    InformationComponent,
    HistoryOneComponent,
    FilterInputComponent,
    SelectNoteComponent,
    ContactViewComponent,
    ContactFormComponent,
    HistoryTwoComponent,
    HistoryThreeComponent,
    HistoryFourComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EntitiesControlModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerServiceModule { }
