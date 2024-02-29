import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CrearClienteDto {

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo nombre_completo no debe estar vacío' })
    @IsString({ message: 'El campo nombre_completo tiene que ser una cadena de caracteres' })
    @MinLength(4 , {message: 'El campo nombre_completo debe 4 caracteres como minimo'})
    @MaxLength(50 , {message: 'El campo nombre_completo debe 50 caracteres como maximo'})
    nombre_completo: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo usuario no debe estar vacío' })
    @IsEmail()
    @MinLength(4 , {message: 'El campo usuario debe email caracteres como minimo'})
    @MaxLength(50 , {message: 'El campo usuario debe 50 caracteres como maximo'})
    email: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo usuario no debe estar vacío' })
    @IsString({ message: 'El campo usuario tiene que ser una cadena de caracteres' })
    @MinLength(4 , {message: 'El campo usuario debe 4 caracteres como minimo'})
    @MaxLength(16 , {message: 'El campo usuario debe 16 caracteres como maximo'})
    usuario: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo password no debe estar vacío' })
    @IsString({ message: 'El campo password tiene que ser una cadena de caracteres' })
    @MinLength(4 , {message: 'El campo password debe 4 caracteres como minimo'})
    @MaxLength(16 , {message: 'El campo password debe 16 caracteres como maximo'})
    password: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo departamento no debe estar vacío' })
    @IsString({ message: 'El campo departamento tiene que ser una cadena de caracteres' })
    @MaxLength(26 , {message: 'El campo departamento debe 16 caracteres como maximo'})
    departamento: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo provincia no debe estar vacío' })
    @IsString({ message: 'El campo provincia tiene que ser una cadena de caracteres' })
    @MaxLength(26 , {message: 'El campo provincia debe 16 caracteres como maximo'})
    provincia: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo distrito no debe estar vacío' })
    @IsString({ message: 'El campo distrito tiene que ser una cadena de caracteres' })
    @MaxLength(26 , {message: 'El campo distrito debe 16 caracteres como maximo'})
    distrito: string;


}




