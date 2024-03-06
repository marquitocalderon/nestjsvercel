import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CrearProductoDto } from './dto/productos.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AUTENTICACION_PARA_EL } from '../auth/decorators/auth.decorator';
import { Role } from '../auth/enums/role.enum';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { PermisoPara } from '../auth/decorators/roles.decorator';

@ApiBearerAuth()
@ApiTags("PRODUCTOS")
@Controller('productos')
export class ProductosController {
    constructor(private productoService: ProductosService) { }

    @Post()
    @UseGuards(AuthGuard, RolesGuard)
    @PermisoPara(Role.ADMIN)
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


    

    @Get()
    getProductos(){
        return this.productoService.obtenertodolosdatos()
    }

    @Get(':id')
    getPerfilById(@Param('id', ParseIntPipe) id:number){
        return this.productoService.obtenerPorID(id)
    }

    



}
