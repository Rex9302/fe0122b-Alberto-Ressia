import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { recupera, aggiorna } from 'src/app/service/posts-service.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
  posts!:Post [];

  constructor() { }

  async ngOnInit() {
    const posts = await recupera()
    this.posts = posts
  }

  disattiva(id:number, i:number){
    aggiorna( {active:false}, id);
    this.posts.splice(i,1);

  }
}
