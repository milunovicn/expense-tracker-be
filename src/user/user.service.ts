import { Injectable } from '@nestjs/common'
import * as models from '../models'


const USERS: models.entities.User[] = [
  { id: '1', username: 'testuser', password: 'hashedpassword', email: 'testuser@example.com' },
  { id: '2', username: 'anotheruser', password: 'anotherhashedpassword', email: 'anotheruser@example.com' }
]

@Injectable()
export class Service implements models.service.Service<models.entities.User>{

  // TODO: Implement user service method, add proper return type
  get(id: string): models.entities.User | undefined {
    return USERS.find(user => user.id === id)
  }

  getByUsername(username: string): models.entities.User | undefined {
    return USERS.find(user => user.username === username)
  }
}
