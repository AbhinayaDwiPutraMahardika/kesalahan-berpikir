import { Controller, Get, Req, Param, Post, Put, Delete, Query } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';

@Controller('kuceng')
export class UserController {
  constructor(private UserService: UserService) { }
  
  @Get('kabeh')
  findAll(@Req() request: Request){
    return this.UserService.findAll();
  }

  // @Get('oren')
  // findId(@Req() request: Request): string {
  // return 'This action returns all kuceng oren';
  // }

  // @Get(':jeneng')
  // findOne(@Param() params: any): string {
  //   return `This action returns all kuceng oren bernama ${params.jeneng}`;
  // }

  @Post()
  create(): string {
    return 'This action adds a new user'
  }

  @Put(':id')
  update(@Param('id') id: string): string{
    return `This action update user id ${id}`
  }

  @Delete(':id')
  delete(@Param('id') id: string): string{
    return `This action delete user id ${id}`
  }

  @Get()
  async(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action return all user filtered by age : ${age} and breed : ${breed}`
  }
}
