import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor() { }
}
let users:User[] = [
  {
    id: 1,
    email: 'moltogrosso@gmail.com',
    nome : 'Big',
    role : 'admin'
  },
  {
    id: 2,
    email: 'normale@gmail.com',
    nome : 'Normal',
    role : 'user'
  }
]

export function recuperaUser(){
  return users
}

export function getIdUsers(id:number){
  return users.find(x=> x.id == id)
}
