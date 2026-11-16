import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel } from '../app.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestmentPrice = 0;
  annualInvestmentPrice = 0;
  expectedReturnPrice = 5;
  duration = 10;
  @Output() InvestmentDataEvent = new EventEmitter<InvestmentModel>();
  onSubmit() {
    this.InvestmentDataEvent.emit({
      initialInvestment:this.initialInvestmentPrice,
      annualInvestment:this.annualInvestmentPrice,
      duration:this.duration,
      expectedReturn:this.expectedReturnPrice
    })
  }
}
