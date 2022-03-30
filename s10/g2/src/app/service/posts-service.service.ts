import { Post } from '../models/post';

let newPost : Post[];

let posts : Post[] = [
  {
    id: 1,
    title : 'Post 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna mi, convallis et commodo et, dapibus et lacus. Integer non tempus lorem, nec porta massa. Phasellus sed ultrices nunc. Praesent facilisis purus lacus. Vestibulum ac lectus ut turpis placerat facilisis. Sed aliquam leo non massa eleifend congue.',
    active:true,
    type : 'notizie',
    author : 'Pelat One'
  },
  {
    id: 2,
    title : 'Post 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna mi, convallis et commodo et, dapibus et lacus. Integer non tempus lorem, nec porta massa. Phasellus sed ultrices nunc. Praesent facilisis purus lacus. Vestibulum ac lectus ut turpis placerat facilisis. Sed aliquam leo non massa eleifend congue. In sit amet dui pharetra, iaculis augue pulvinar, ornare neque. Mauris magna enim, scelerisque vel dictum a, pellentesque at urna. Integer at lobortis nibh, quis maximus lacus. Nullam non ligula ligula. Ut molestie mi in odio venenatis, vitae laoreet nisl eleifend.',
    active:false,
    type : 'politica',
    author : 'Pelat Two'
  },
  {
    id: 3,
    title : 'Post 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis purus lacus. Vestibulum ac lectus ut turpis placerat facilisis. Sed aliquam leo non massa eleifend congue. In sit amet dui pharetra, iaculis augue pulvinar, ornare neque. Mauris magna enim, scelerisque vel dictum a, pellentesque at urna. Integer at lobortis nibh, quis maximus lacus. Nullam non ligula ligula. Ut molestie mi in odio venenatis, vitae laoreet nisl eleifend.',
    active:true,
    type : 'sport',
    author : 'Pelat One'
  },
  {
    id: 4,
    title : 'Post 4',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna mi, convallis et commodo et, dapibus et lacus. Integer non tempus lorem, nec porta massa. Phasellus sed ultrices nunc. Praesent facilisis purus lacus. Vestibulum ac lectus ut turpis placerat facilisis. Integer at lobortis nibh, quis maximus lacus. Nullam non ligula ligula. Ut molestie mi in odio venenatis, vitae laoreet nisl eleifend.',
    active:false,
    type : 'politica',
    author : 'Pelat Two'
  }
]

export function recupera(){
  return posts;
}

export function aggiorna(data: Partial<Post>, id:number){
  posts = posts.map(param => param.id == id? {...param,...data}: param);
  return posts.find(param => param.id == id) as Post;
}

export function recuperaDettagli(id:number){
  newPost = posts.filter(posts => posts.id == id)
  return newPost
}

export function dettagliPost(){
  return newPost
}
