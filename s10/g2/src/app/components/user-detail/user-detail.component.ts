import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getIdUsers } from 'src/app/service/users.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  users!:any

  constructor(private router:ActivatedRoute) { }

  ngOnInit():void {
    this.router.params.subscribe(params => {
      const id = +params['id'];
      this.users = getIdUsers(id)
    })
  }

}
