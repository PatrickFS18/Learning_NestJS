/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
---CRUD---
GET /users
GET /users/:id
POST /users
PATCH /users/:id
DELETE /users/:id
*/

  @Get() //GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [role];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Get('interns') //GET /users/interns
  findAllInterns() {
    return [];
  }
  @Post()
  create(@Body() user: object) {
    return user;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
