import { Component, Input, output } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data: Ticket | undefined;
  detailsVisible = false;
  completedTicket =output<string>();
  onToggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  onMarkCompleted(){
    if(this.data)
    return this.completedTicket.emit(this.data.id);
  }
}
