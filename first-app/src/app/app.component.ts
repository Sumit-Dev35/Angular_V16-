import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user.data';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName: string | undefined;
  selectedUserId: string | undefined;
  onSelectUser(id: string) {
    this.selectedUserName = this.users.find((user) => user.id === id)?.name;
    if (this.selectedUserName) {
      this.selectedUserId = id;
    }
  }
}
