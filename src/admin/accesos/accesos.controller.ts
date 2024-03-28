import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AccesosService } from './accesos.service';
import { CrearPermisosDTO } from './dto/accesos.dto.entity';


@Controller('accesos')
export class AccesosController {

    constructor(private accesoServicio: AccesosService){}

    @Get()
    obtenerAccesos(){
        return this.accesoServicio.obtenerDatos();
    }

    @Post()
    postAccesos(@Body() crearPermisosDTO: CrearPermisosDTO) {
      return this.accesoServicio.postPermisoDatos(crearPermisosDTO)
    }


    @Put()
    putAccesos(@Body() editarPermisos: CrearPermisosDTO) {
      return this.accesoServicio.putPermisoDatos(editarPermisos)
    }
}
