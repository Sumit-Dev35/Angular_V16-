import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskModel } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<NewTaskModel>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onCancelDialog() {
    this.closeDialog.emit(true);
  }
  onSumitForm() {
    this.add.emit({
      title: this.enteredTitle,
      date: this.enteredDate,
      summary: this.enteredSummary,
    });
  }
}
