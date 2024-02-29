import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsNumberString, IsOptional, IsString, Length, MaxLength, MinLength } from 'class-validator';

export class CrearClienteDto {

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo nombre_completo no debe estar vacío' })
    @IsString({ message: 'El campo nombre_completo tiene que ser una cadena de caracteres' })
    @MaxLength(50, { message: 'El campo nombre_completo debe 50 caracteres como maximo' })
    @MinLength(4, { message: 'El campo nombre_completo debe 4 caracteres como minimo' })
    nombre_completo: string;

    @IsNumberString()
    @Length(8, 8, { message: 'El DNI debe tener exactamente 8 dígitos' })
    dni: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo email no debe estar vacío' })
    @IsEmail()
    @MaxLength(50, { message: 'El campo email debe 50 caracteres como maximo' })
    @MinLength(4, { message: 'El campo email debe 4 caracteres como minimo' })
    email: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo usuario no debe estar vacío' })
    @IsString({ message: 'El campo usuario tiene que ser una cadena de caracteres' })
    @MaxLength(16, { message: 'El campo usuario debe 16 caracteres como maximo' })
    @MinLength(4, { message: 'El campo usuario debe 4 caracteres como minimo' })
    usuario: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo password no debe estar vacío' })
    @IsString({ message: 'El campo password tiene que ser una cadena de caracteres' })
    @MaxLength(16, { message: 'El campo password debe 16 caracteres como maximo' })
    @MinLength(4, { message: 'El campo password debe 4 caracteres como minimo' })
    password: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo departamento no debe estar vacío' })
    @IsString({ message: 'El campo departamento tiene que ser una cadena de caracteres' })
    @MaxLength(26, { message: 'El campo departamento debe 16 caracteres como maximo' })
    departamento: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo provincia no debe estar vacío' })
    @IsString({ message: 'El campo provincia tiene que ser una cadena de caracteres' })
    @MaxLength(26, { message: 'El campo provincia debe 16 caracteres como maximo' })
    provincia: string;

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo distrito no debe estar vacío' })
    @IsString({ message: 'El campo distrito tiene que ser una cadena de caracteres' })
    @MaxLength(26, { message: 'El campo distrito debe 16 caracteres como maximo' })
    distrito: string;


}




