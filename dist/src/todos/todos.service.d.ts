export interface Todo {
    id: number;
    title: string;
    status: 'pending' | 'success';
}
export declare class TodosService {
    private todos;
    showAll(): Todo[];
    showById(id: number): Todo;
    add(title: string, status: 'pending' | 'success'): Todo;
    update(id: number, title: string, status: 'pending' | 'success'): Todo;
    remove(id: number): void;
}
