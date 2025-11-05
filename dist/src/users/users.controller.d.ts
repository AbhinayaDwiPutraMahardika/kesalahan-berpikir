import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        succes: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            createAt: Date;
            updateAt: Date;
        };
    } | {
        succes: boolean;
        message: string;
        data: null;
    }>;
    findAll(): Promise<{
        succes: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            createAt: Date;
            updateAt: Date;
        }[];
    } | {
        succes: boolean;
        message: string;
        data: null;
    }>;
    update(id: string, UpdateUserDto: UpdateUserDto): Promise<{
        success: boolean;
        message: string;
        data: null;
    } | {
        success: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            createAt: Date;
            updateAt: Date;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
        data: null;
        succes?: undefined;
    } | {
        succes: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            createAt: Date;
            updateAt: Date;
        };
        success?: undefined;
    }>;
}
