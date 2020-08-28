import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  user: User = { id: 0, name: '', email: '' }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getUser(id).subscribe(res => {
      this.user = res;
    });
  }

}
