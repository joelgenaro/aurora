import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './components/status/status.component';
import { CardComponent } from './components/card/card.component';
import { PolicyRenewalsComponent } from './components/policy-renewals/policy-renewals.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: PolicyRenewalsComponent,
  },
];

@NgModule({
  declarations: [StatusComponent, CardComponent, PolicyRenewalsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PolicyRenewalsModule {}
