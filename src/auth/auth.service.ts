import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
    private readonly jwt: JwtService
  ) { }
  async auth(authDto: AuthDto) {
    try {
      const { email, password } = authDto
      const findUser = await this.prisma.user.findFirst({
        where: {email}
      })
      if (!findUser) {
        return {
          success: false,
          message: `Invalid Email`,
          data:null
        }
      }
      const isMatchPassword = await this.bcrypt.comparePassword(password, findUser.password)
      if (!isMatchPassword) {
        return {
          success: false,
          message: `Invalid Password`,
          data: null
        }
      }

      const token = this.jwt.sign(
        {
          id: findUser.id, name: findUser.name, role: findUser.role
        });
      
      return {
        succes: true,
        message: `Login Successful`,
        data: {token, name: findUser.name, role: findUser.role}
      }
    } catch (error) {
      return {
        succes: false,
        message: `error when signin: ${error.message}`,
        data: null
      }
    }
  }
}