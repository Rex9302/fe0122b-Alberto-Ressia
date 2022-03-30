export interface User {
  id:number,
  email:string,
  nome:string,
  role: 'admin' | 'user'
}
