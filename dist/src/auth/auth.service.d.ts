import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly bcrypt;
    private readonly jwt;
    constructor(prisma: PrismaService, bcrypt: BcryptService, jwt: JwtService);
    auth(authDto: AuthDto): Promise<{
        success: boolean;
        message: string;
        data: null;
        succes?: undefined;
    } | {
        succes: boolean;
        message: string;
        data: {
            token: string;
            name: string;
            role: import("@prisma/client").$Enums.UserRole;
        };
        success?: undefined;
    } | {
        succes: boolean;
        message: string;
        data: null;
        success?: undefined;
    }>;
}
