import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
