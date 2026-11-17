import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-tickes',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickes.component.html',
  styleUrl: './new-tickes.component.css',
})
export class NewTickesComponent {
  @Output() add = new EventEmitter<{ title: string; request: string }>();
  onSubmit(title: string, request: string) {
    this.add.emit({ title, request });
  }
}
