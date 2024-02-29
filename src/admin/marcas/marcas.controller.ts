import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CrearMarcasDto } from './dto/marcas.dto';
import { ApiTags } from '@nestjs/swagger';
import { AUTENTICACION_PARA_EL } from '../auth/decorators/auth.decorator';
import { Role } from '../auth/enums/role.enum';

@ApiTags("MARCAS")
@Controller('marcas')
@AUTENTICACION_PARA_EL(Role.ADMIN)
export class MarcasController {


    constructor(private marcaService: MarcasService) { }


    @Get()
    getMarcas(){
        return this.marcaService.obtenerTodaslasMarcas()
    }

    
   
    @Get(':id')
    getMarcabyID(@Param('id', ParseIntPipe) id:number){
        return this.marcaService.obtenerPorID(id)
    }


    @Post()
    postMarcas(@Body() datosdelFrontend: CrearMarcasDto) {

        return this.marcaService.insertarMarcas(datosdelFrontend)

    }


}
