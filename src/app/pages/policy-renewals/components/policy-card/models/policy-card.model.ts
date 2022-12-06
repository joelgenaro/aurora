import { PolicyCardLeft } from './policy-card-left.model';
import { PolicyCardCustomer } from './policy-card-customer.model';
import { PolicyCardAssignedClient } from './policy-card-assignedClient.model';

export class PolicyCard {
  left: PolicyCardLeft[];
  customer: PolicyCardCustomer[];
  assignedClient: PolicyCardAssignedClient[];
  date: string;
}
