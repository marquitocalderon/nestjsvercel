import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CrearProductoDto } from './dto/productos.dto';

@Controller('productos')
export class ProductosController {

    constructor(private productoService: ProductosService) { }



    @Post()
    @UseInterceptors(FileInterceptor('imagen'))
    postUsuarios(@UploadedFile() imagen: Express.Multer.File, @Body() datosDelFormulario: CrearProductoDto,) {
        // Verificar si el mimetype es de una imagen
        // Verificar si se proporcionó una imagen y si es del tipo esperado
        if (imagen && imagen.mimetype.startsWith('image/')) {
            // Si se proporciona una imagen válida, llamar a lid_usuarioa función para procesar la imagen
            // return this.usuarioService.crearUsuario(datosDelFormulario, imagen);

            console.log(datosDelFormulario, "con imagen")
        }

        else if (imagen === undefined) {
            // return this.usuarioService.crearUsuario(datosDelFormulario, imagen);

            console.log(datosDelFormulario , "sin imagne")
        }

        else {
            // Si no se proporciona una imagen o es de un tipo no válido, continuar con la actualización sin imagen
            return { message: "POR FAVOR ENVIAR UNA IMAGEN QUE SOLO SEA IMAGEN OK" }
        }
    }

}
