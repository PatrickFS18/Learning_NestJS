import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {
  /*
CRUD!
GET /users
GET /users/:id
POST /users
PATCH /users/:id
DELETE /users/:id
*/

  @Get() //GET /users
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Get('interns') //GET /users/interns
  findAllInterns() {
    return [];
  }
}
