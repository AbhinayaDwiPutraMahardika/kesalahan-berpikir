import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateSiswaDto {
  @IsNotEmpty()
  @IsString()
  nisn: string;

  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  umur: number;

  @IsString()
  @IsNotEmpty()
  alamat: string;

}


// @IsString()
// @Length(5, 20)
// nisn: string;

// @IsString()
// @Length(3, 50)
// nama: string;

// @IsString()
// alamat: string;

// @IsInt()
// @Min(6)
// @Max(25)
// umur: number;
