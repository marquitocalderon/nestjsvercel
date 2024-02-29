import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CrearTallasDto {

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo talla no debe estar vacío' })
    @IsString({ message: 'El campo talla tiene que ser una cadena de caracteres' })
    @MaxLength(16 , {message: 'El campo talla debe 16 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo talla debe tener 1 caractere como minimo'})
    talla: string;

}
