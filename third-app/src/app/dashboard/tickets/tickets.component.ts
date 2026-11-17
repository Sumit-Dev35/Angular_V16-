import { Component } from '@angular/core';
import { NewTickesComponent } from './new-tickes/new-tickes.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTickesComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticketData: { title: string; request: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.request,
      id: new Date().getTime().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket: Ticket) => {
      if (ticket.id === id) {
        ticket.status = 'close';
      }
      return ticket;
    });
  }
}
