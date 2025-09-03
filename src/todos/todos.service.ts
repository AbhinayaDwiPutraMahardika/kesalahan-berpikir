import { Injectable, NotFoundException } from '@nestjs/common';

export interface Todo {
  id: number;
  title: string;
  status: 'pending' | 'success';
}

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    { id: 1, title: 'slip', status: 'success' },
    { id: 2, title: 'run', status: 'pending' },
  ];

  showAll(): Todo[] {
    return this.todos;
  }

  showById(id: number): Todo{
    const nemu = this.todos.find((aidi) => aidi.id === id);
    if (!nemu) {
      throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    }
    return nemu;
  }

  add(title: string, status: 'pending' | 'success'): Todo {
    const idke: Todo = {
      id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
      title,
      status,
    };
    this.todos.push(idke);
    return idke;
  }

  update(id: number, title: string, status: 'pending' | 'success'): Todo{
    const tambah = this.showById(id);
    tambah.title = title;
    tambah.status = status;
    return tambah;
    }
    
     remove(id: number): void {
        const index = this.todos.findIndex((item) => item.id === id);
        if (index === -1) throw new NotFoundException(`Todo dengan ID ${id} tidak ditemukan`);
        this.todos.splice(index, 1);
    }
}
