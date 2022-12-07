import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PolicyCard } from '../components/policy-card/models/policy-card.model';
import { PolicyCards } from './mock-policy-cards';

@Injectable({
  providedIn: 'root',
})
export class PolicyCardService {
  constructor() {}

  getCards(): Observable<PolicyCard[]> {
    const cards = of(PolicyCards);
    return cards;
  }
}
