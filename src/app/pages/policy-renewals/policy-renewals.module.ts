import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '@root/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { PolicyRenewalsComponent } from './components/policy-renewals/policy-renewals.component';
import { PolicySortComponent } from './components/policy-sort/policy-sort.component';
import { PolicyCardComponent } from './components/policy-card/policy-card.component';
import { PolicyStatusComponent } from './components/policy-status/policy-status.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApplicationRoutes } from '@root/shared/settings/common.settings';
import { PolicyRenewalsTwoComponent } from './policy-renewals-two/policy-renewals-two.component';
import { PolicyFilterComponent } from './components/policy-filter/policy-filter.component';

const routes: Route[] = [
  {
    path: ApplicationRoutes.Empty,
    component: PolicyRenewalsComponent,
  },
  {
    path: ApplicationRoutes.PolicyRenewalsTwo,
    component: PolicyRenewalsTwoComponent,
  },
];

@NgModule({
  declarations: [
    PolicyRenewalsComponent,
    PolicySortComponent,
    PolicyCardComponent,
    PolicyStatusComponent,
    PolicyRenewalsTwoComponent,
    PolicyFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
  ],
})
export class PolicyRenewalsModule {}
