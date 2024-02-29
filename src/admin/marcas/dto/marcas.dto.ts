import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CrearMarcasDto {

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo marca no debe estar vacío' })
    @IsString({ message: 'El campo marca tiene que ser una cadena de caracteres' })
    @MaxLength(16 , {message: 'El campo marca debe 16 caracteres como maximo'})
    @MinLength(2 , {message: 'El campo marca debe 2 caracteres como minimo'})
    marca: string;

}
