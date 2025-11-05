import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';
import { Siswa } from './entities/siswa.entity';
export declare class SiswaService {
    private readonly siswa;
    create(createSiswaDto: CreateSiswaDto): string;
    findAll(): CreateSiswaDto[];
    findOne(nisn: string): CreateSiswaDto;
    update(nisn: string, updateSiswaDto: UpdateSiswaDto): Siswa;
    remove(nisn: string): void;
}
