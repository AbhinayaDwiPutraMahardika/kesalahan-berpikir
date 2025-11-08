import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
export declare class UsersService {
    private prisma;
    private readonly bcrypt;
    constructor(prisma: PrismaService, bcrypt: BcryptService);
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
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
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
    remove(id: number): Promise<{
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
