import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CrearGeneroDto {

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo genero no debe estar vacío' })
    @IsString({ message: 'El campo genero tiene que ser una cadena de caracteres' })
    @MaxLength(16 , {message: 'El campo genero debe 16 caracteres como maximo'})
    @MinLength(4 , {message: 'El campo genero debe 4 caracteres como minimo'})
    genero: string;

}
