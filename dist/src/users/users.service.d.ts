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
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
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
            role: import("@prisma/client").$Enums.UserRole;
            createAt: Date;
            updateAt: Date;
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
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            createAt: Date;
            updateAt: Date;
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
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            createAt: Date;
            updateAt: Date;
        };
        success?: undefined;
    }>;
}
