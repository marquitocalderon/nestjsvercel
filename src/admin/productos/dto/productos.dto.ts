import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CrearProductoDto {

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo nombre_producto no debe estar vacío' })
    @IsString({ message: 'El campo nombre_producto tiene que ser una cadena de caracteres' })
    @MaxLength(16 , {message: 'El campo nombre_producto debe 16 caracteres como maximo'})
    @MinLength(2 , {message: 'El campo nombre_producto debe 2 caracteres como minimo'})
    nombre_producto: string;    

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo descripcion no debe estar vacío' })
    @IsString({ message: 'El campo descripcion tiene que ser una cadena de caracteres' })
    @MaxLength(36 , {message: 'El campo descripcion debe 16 caracteres como maximo'})
    @MinLength(4 , {message: 'El campo descripcion debe 4 caracteres como minimo'})
    descripcion: string;

    @IsNotEmpty({ message: 'El precio no debe estar vacío' })
    @MaxLength(100, { message: 'El campo precio debe tener como máximo 100 caracteres' })
    @MinLength(1, { message: 'El campo precio debe tener como mínimo 1 caracter' })
    @IsNumberString({},{ message: 'El campo precio debe ser un número o una cadena numérica' })
    precio: number;

    @IsNotEmpty({ message: 'El stock no debe estar vacío' })
    @MaxLength(100, { message: 'El campo stock debe tener como máximo 100 caracteres' })
    @MinLength(1, { message: 'El campo stock debe tener como mínimo 1 caracter' })
    @IsNumberString({},{ message: 'El campo stock debe ser un número o una cadena numérica' })
    stock: number;


    @IsNotEmpty({ message: 'El id_categoria no debe estar vacío' })
    @IsString({message: "el campo id_categoria DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_categoria debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_categoria debe 1 caracteres como minimo'})
    id_categoria:string

    @IsNotEmpty({ message: 'El id_talla no debe estar vacío' })
    @IsString({message: "el campo id_talla DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_talla debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_talla debe 1 caracteres como minimo'})
    id_talla:string

    @IsNotEmpty({ message: 'El id_marca no debe estar vacío' })
    @IsString({message: "el campo id_marca DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_marca debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_marca debe 1 caracteres como minimo'})
    id_marca:string

    @IsNotEmpty({ message: 'El id_genero no debe estar vacío' })
    @IsString({message: "el campo id_genero DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_genero debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_genero debe 1 caracteres como minimo'})
    id_genero:string

    @IsNotEmpty({ message: 'El id_usuario no debe estar vacío' })
    @IsString({message: "el campo id_usuario DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_usuario debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_usuario debe 1 caracteres como minimo'})
    id_usuario:string
}



export class UpdateProductoDto {

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo nombre_producto no debe estar vacío' })
    @IsString({ message: 'El campo nombre_producto tiene que ser una cadena de caracteres' })
    @MaxLength(16 , {message: 'El campo nombre_producto debe 16 caracteres como maximo'})
    @MinLength(2 , {message: 'El campo nombre_producto debe 2 caracteres como minimo'})
    nombre_producto: string;    

    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value)) // Trim whitespaces at the beginning and end
    @IsNotEmpty({ message: 'El campo descripcion no debe estar vacío' })
    @IsString({ message: 'El campo descripcion tiene que ser una cadena de caracteres' })
    @MaxLength(36 , {message: 'El campo descripcion debe 16 caracteres como maximo'})
    @MinLength(4 , {message: 'El campo descripcion debe 4 caracteres como minimo'})
    descripcion: string;

    @IsNotEmpty({ message: 'El precio no debe estar vacío' })
    @MaxLength(100, { message: 'El campo precio debe tener como máximo 100 caracteres' })
    @MinLength(1, { message: 'El campo precio debe tener como mínimo 1 caracter' })
    @IsNumberString({},{ message: 'El campo precio debe ser un número o una cadena numérica' })
    precio: number;

    @IsNotEmpty({ message: 'El stock no debe estar vacío' })
    @MaxLength(100, { message: 'El campo stock debe tener como máximo 100 caracteres' })
    @MinLength(1, { message: 'El campo stock debe tener como mínimo 1 caracter' })
    @IsNumberString({},{ message: 'El campo stock debe ser un número o una cadena numérica' })
    stock: number;


    @IsNotEmpty({ message: 'El id_categoria no debe estar vacío' })
    @IsString({message: "el campo id_categoria DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_categoria debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_categoria debe 1 caracteres como minimo'})
    id_categoria:string

    @IsNotEmpty({ message: 'El id_talla no debe estar vacío' })
    @IsString({message: "el campo id_talla DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_talla debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_talla debe 1 caracteres como minimo'})
    id_talla:string

    @IsNotEmpty({ message: 'El id_marca no debe estar vacío' })
    @IsString({message: "el campo id_marca DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_marca debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_marca debe 1 caracteres como minimo'})
    id_marca:string

    @IsNotEmpty({ message: 'El id_genero no debe estar vacío' })
    @IsString({message: "el campo id_genero DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_genero debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_genero debe 1 caracteres como minimo'})
    id_genero:string

    @IsNotEmpty({ message: 'El id_usuario no debe estar vacío' })
    @IsString({message: "el campo id_usuario DEBE MANDARSE EN STRING"})
    @MaxLength(100 , {message: 'El campo id_usuario debe 100 caracteres como maximo'})
    @MinLength(1 , {message: 'El campo id_usuario debe 1 caracteres como minimo'})
    id_usuario:string
}





