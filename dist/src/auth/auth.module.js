"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const prisma_module_1 = require("../../prisma/prisma.module");
const bcrypt_service_1 = require("../bcrypt/bcrypt.service");
const jwt_strategy_1 = require("../helper/jwt-strategy");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, bcrypt_service_1.BcryptService, jwt_strategy_1.JWTStrategy],
        imports: [
            prisma_module_1.PrismaModule,
            config_1.ConfigModule,
            passport_1.PassportModule.register({ defaultStrategy: `jwt` }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || `secret-word`,
                signOptions: {
                    expiresIn: Number(process.env.JWT_EXPIRATION) ?? 1440,
                }
            })
        ]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map