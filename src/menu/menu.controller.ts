import { Controller, Get, Req, Put, Param, Post, Delete, Query } from '@nestjs/common';
import type {Request} from '@nestjs/common';
@Controller('menu')
export class MenuController {

    @Get()
    findAll(@Req() request: Request): string {
        return 'Menampilkan semua yang ada di menu';
    }

    
    @Post(':id')
    create(@Param(':id') id:string): string {
        return `Menambahkan ${id} ke Menu`
        }

    @Put(':id')
    update(@Param('id') id: string): string{
        return `Mengupdate ${id}`
    }

    @Delete(':id')
    delete(@Param('id') id: string): string{
        return `Menghapus ${id}`
    }

}   