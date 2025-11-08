"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt_service_1 = require("../bcrypt/bcrypt.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    prisma;
    bcrypt;
    jwt;
    constructor(prisma, bcrypt, jwt) {
        this.prisma = prisma;
        this.bcrypt = bcrypt;
        this.jwt = jwt;
    }
    async auth(authDto) {
        try {
            const { email, password } = authDto;
            const findUser = await this.prisma.user.findFirst({
                where: { email }
            });
            if (!findUser) {
                return {
                    success: false,
                    message: `Invalid Email`,
                    data: null
                };
            }
            const isMatchPassword = await this.bcrypt.comparePassword(password, findUser.password);
            if (!isMatchPassword) {
                return {
                    success: false,
                    message: `Invalid Password`,
                    data: null
                };
            }
            const token = this.jwt.sign({
                id: findUser.id, name: findUser.name, role: findUser.role
            });
            return {
                succes: true,
                message: `Login Successful`,
                data: { token, name: findUser.name, role: findUser.role }
            };
        }
        catch (error) {
            return {
                succes: false,
                message: `error when signin: ${error.message}`,
                data: null
            };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bcrypt_service_1.BcryptService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map