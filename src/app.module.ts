import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { TodosModule } from './todos/todos.module';
import { SiswaModule } from './siswa/siswa.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, TodosModule, SiswaModule, UsersModule],
  controllers: [AppController, UserController, MenuController],
  providers: [AppService, UserService, MenuService,],
})
export class AppModule {}
