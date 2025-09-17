import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';
import { Siswa } from './entities/siswa.entity';

@Injectable()
export class SiswaService {
  private readonly siswa: CreateSiswaDto[] = [];
  create(createSiswaDto: CreateSiswaDto) {
    this.siswa.push(createSiswaDto);
    return 'This action adds a new siswa';
  }

  findAll(): CreateSiswaDto[] {
    return this.siswa;
  }

  findOne(nisn: string): CreateSiswaDto {
    const siswa = this.siswa.find((s) => s.nisn === nisn);
    if (!siswa) {
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    }
    return siswa;
  }

  update(nisn: string, updateSiswaDto: UpdateSiswaDto): Siswa {
    const siswa = this.findOne(nisn);
    Object.assign(siswa, updateSiswaDto);
    return siswa;
  }

  remove(nisn: string): void {
    const index = this.siswa.findIndex((s) => s.nisn === nisn);
    if (index === -1) {
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    }
    this.siswa.splice(index, 1);
  }
}
