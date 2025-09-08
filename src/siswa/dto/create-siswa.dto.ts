import { IsString, IsInt, Min, Max, Length } from 'class-validator';

export class CreateSiswaDto {
  @IsString()
  @Length(5, 20)
  nisn: string;

  @IsString()
  @Length(3, 50)
  nama: string;

  @IsString()
  alamat: string;

  @IsInt()
  @Min(6)
  @Max(25)
  umur: number;
}
