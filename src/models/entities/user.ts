export interface User {
  id: string
  username: string
  email: string
  password: string
}

export namespace User {
  export type Credentials = Pick<User, 'username' | 'password'>
}