import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { recupera, aggiorna, recuperaDettagli } from 'src/app/service/posts-service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts!:Post [];

  constructor() { }

  async ngOnInit() {
    const posts = await recupera()
    this.posts = posts
  }

  attiva(id:number, i:number){
    aggiorna( {active:true}, id);
    this.posts.splice(i,1);
  }
  dettagli(id:number){
    recuperaDettagli(id)
  }
}
