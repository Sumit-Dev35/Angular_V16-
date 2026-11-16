import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-details.component.html',
  styleUrl: './investment-details.component.css',
})
export class InvestmentDetailsComponent {
  @Input({ required: true }) results: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] = [];
}
