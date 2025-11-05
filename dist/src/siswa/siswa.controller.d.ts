import { SiswaService } from './siswa.service';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';
export declare class SiswaController {
    private readonly siswaService;
    constructor(siswaService: SiswaService);
    create(createSiswaDto: CreateSiswaDto): string;
    findAll(): CreateSiswaDto[];
    findOne(nisn: string): CreateSiswaDto;
    update(nisn: string, updateSiswaDto: UpdateSiswaDto): import("./entities/siswa.entity").Siswa;
    remove(nisn: string): void;
}
