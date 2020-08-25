import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../tools/confirm-dialog/confirm-dialog.component';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: User = { id: 0, name: '', email: '' } 

  constructor(
    private router: Router,
    private service: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    let user = {
      id: form.id,
      name: form.name,
      email: form.email
    };
  
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to create this user?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.addUser(user).subscribe(() => {
          this.router.navigate(["/users"]);
        });
      }
    });
  }
}
