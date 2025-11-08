import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import FormatValidation from 'src/helper/validation-format';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(new ValidationPipe({ exceptionFactory: FormatValidation }))
  auth(@Body() authDto: AuthDto) {
    return this.authService.auth(authDto);
  }

  }
