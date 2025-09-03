import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
    Post,
    Put,
    Delete
} from '@nestjs/common';
import { Todo, TodosService } from './todos.service';
@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get(':id')
  showById(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.showById(id);
  }

  @Get()
  showAll() {
    return this.todoService.showAll();
  }

  @Post()
  add(
    @Body('title') title: string,
    @Body('status') status: 'pending' | 'success',
  ) {
    return this.todoService.add(title, status);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body('title') title: string,
        @Body('status') status: 'pending' | 'success'
    ) {
        return this.todoService.update(id, title, status);
    }
    @Delete(':id')
    removeTodo(@Param('id', ParseIntPipe) id: number): void {
        this.todoService.remove(id);
    }

}
