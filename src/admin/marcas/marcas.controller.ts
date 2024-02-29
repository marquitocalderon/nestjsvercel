import { Body, Controller, Post } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CrearMarcasDto } from './dto/marcas.dto';

@Controller('marcas')
export class MarcasController {


    constructor(private marcaService: MarcasService) { }


    @Post()
    postMarcas(@Body() datosdelFrontend: CrearMarcasDto) {

        return this.marcaService.insertarMarcas(datosdelFrontend)

    }


}
