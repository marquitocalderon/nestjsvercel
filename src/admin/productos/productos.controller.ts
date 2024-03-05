import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CrearProductoDto } from './dto/productos.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCTOS')
@Controller('productos')
export class ProductosController {
    constructor(private productoService: ProductosService) { }

    @Post()
    @UseInterceptors(
        FileInterceptor('imagen', {
            limits: {
                fileSize: 2 * 1024 * 1024, // 2 MB limit
            },
        }),
    )
    postUsuarios(
        @UploadedFile() imagen: Express.Multer.File,
        @Body() datosDelFormulario: CrearProductoDto,
    ) {

         // Convertir datos a números si es necesario
         datosDelFormulario.precio = +datosDelFormulario.precio; // Ejemplo de conversión de 'cantidad' a número
         datosDelFormulario.stock = +datosDelFormulario.stock;
        if (imagen && imagen.mimetype.startsWith('image/')) {
            return this.productoService.crearProducto(datosDelFormulario, imagen)
        } else if (imagen === undefined) {
            return this.productoService.crearProducto(datosDelFormulario, imagen)
        }

        // Verificar si la imagen excede el límite de tamaño
        else if (imagen.size > 2 * 1024 * 1024) {
            throw new HttpException(
                `Por favor, envíe un archivo de imagen 2 mb para abajo.`,
                HttpStatus.BAD_REQUEST,
            );
        } else {
            // Si no se proporciona una imagen o es de un tipo no válido, continuar con la actualización sin imagen
            throw new HttpException(
                `Por favor, envíe un archivo de imagen válido.`,
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
