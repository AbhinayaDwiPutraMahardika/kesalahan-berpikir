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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt_service_1 = require("../bcrypt/bcrypt.service");
let UsersService = class UsersService {
    prisma;
    bcrypt;
    constructor(prisma, bcrypt) {
        this.prisma = prisma;
        this.bcrypt = bcrypt;
    }
    async create(createUserDto) {
        try {
            const { name, email, password, role } = createUserDto;
            const users = await this.prisma.user.create({
                data: {
                    name,
                    email,
                    password: await this.bcrypt.hashPassword(password),
                    role
                },
            });
            return {
                succes: true,
                message: 'user data found succesfully',
                data: users
            };
        }
        catch (error) {
            return {
                succes: false,
                message: `error when get user:${error.message}`,
                data: null
            };
        }
    }
    async findAll() {
        try {
            const users = await this.prisma.user.findMany();
            return {
                succes: true,
                message: 'user data found succesfully',
                data: users
            };
        }
        catch (error) {
            return {
                succes: false,
                message: `error when get user:${error.message}`,
                data: null,
            };
        }
    }
    async update(id, updateUserDto) {
        try {
            const { name, email, password, role } = updateUserDto;
            const findUser = await this.prisma.user.findFirst({
                where: { id: id }
            });
            if (!findUser) {
                return {
                    success: false,
                    message: `User does not exist`,
                    data: null
                };
            }
            const updateUser = await this.prisma.user.update({
                where: { id: id },
                data: {
                    name: name ?? findUser.name,
                    email: email ?? findUser.email,
                    password: password ? await this.bcrypt.hashPassword(password) : findUser.password,
                    role: role ?? findUser.role
                }
            });
            return {
                success: true,
                message: `New User has updated`,
                data: updateUser
            };
        }
        catch (error) {
            return {
                success: false,
                message: `error when update user: ${error.message}`,
                data: null
            };
        }
    }
    async remove(id) {
        try {
            const findUser = await this.prisma.user.findFirst({
                where: { id: id }
            });
            if (!findUser) {
                return {
                    success: false,
                    message: `User does not exist`,
                    data: null
                };
            }
            const deletedUser = await this.prisma.user.delete({
                where: { id: id }
            });
            return {
                succes: true,
                message: `User has deleted`,
                data: deletedUser
            };
        }
        catch (error) {
            return {
                success: false,
                message: `error when delete user: ${error.message}`,
                data: null
            };
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, bcrypt_service_1.BcryptService])
], UsersService);
//# sourceMappingURL=users.service.js.map