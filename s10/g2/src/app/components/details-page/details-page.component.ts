import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { dettagliPost } from 'src/app/service/posts-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  posts!:Post [];

  constructor() { }

  async ngOnInit() {
    const posts = await dettagliPost()
    this.posts = posts
  }
}
