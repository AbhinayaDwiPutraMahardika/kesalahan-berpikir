import { Todo, TodosService } from './todos.service';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    showById(id: number): Todo;
    showAll(): Todo[];
    add(title: string, status: 'pending' | 'success'): Todo;
    update(id: number, title: string, status: 'pending' | 'success'): Todo;
    removeTodo(id: number): void;
}
