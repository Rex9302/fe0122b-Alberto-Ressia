import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { recuperaUser } from 'src/app/service/users.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users!:User[]

  constructor(private router:ActivatedRoute) { }

  async ngOnInit() {
    const user = await recuperaUser()
    this.users = user


  }

}
