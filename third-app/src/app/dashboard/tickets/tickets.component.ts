import { Component } from '@angular/core';
import { NewTickesComponent } from './new-tickes/new-tickes.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTickesComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
