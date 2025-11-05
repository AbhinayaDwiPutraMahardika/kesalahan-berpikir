import { User } from './user.interface';
export declare class UserService {
    private readonly users;
    create(user: User): void;
    findAll(): string[];
}
