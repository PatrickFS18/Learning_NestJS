/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Patrick', email: 'patrick@gmail.com', role: 'ADMIN' },
    { id: 2, name: 'Erick', email: 'Erick@gmail.com', role: 'ENGINEER' },
    { id: 3, name: 'Juliana', email: 'Juliana@gmail.com', role: '' },
    { id: 4, name: 'Eder', email: 'Eder@gmail.com', role: 'INTERN' },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(
    id: number,
    updateUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        //{...X,...Y} herda as propriedades de X e sobrepoe com Y
        return { ...user, ...updateUser };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
