import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-tickes',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-tickes.component.html',
  styleUrl: './new-tickes.component.css'
})
export class NewTickesComponent {

}
