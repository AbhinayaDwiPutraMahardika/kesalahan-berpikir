import type { Request } from 'express';
import { UserService } from './user.service';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    findAll(request: Request): string[];
    create(): string;
    update(id: string): string;
    delete(id: string): string;
    async(age: number, breed: string): string;
}
