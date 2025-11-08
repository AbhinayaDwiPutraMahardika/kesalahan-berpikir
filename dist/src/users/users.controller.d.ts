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
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            password: string;
            createAt: Date;
            updateAt: Date;
            id: number;
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
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            password: string;
            createAt: Date;
            updateAt: Date;
            id: number;
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
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            password: string;
            createAt: Date;
            updateAt: Date;
            id: number;
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
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            password: string;
            createAt: Date;
            updateAt: Date;
            id: number;
        };
        success?: undefined;
    }>;
}
