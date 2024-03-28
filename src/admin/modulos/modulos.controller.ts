import { Controller, Get } from '@nestjs/common';
import { ModulosService } from './modulos.service';

@Controller('modulos')
export class ModulosController {


    constructor(private moduloServicio: ModulosService){}

    @Get()
    getModulos(){
        return this.moduloServicio.obtenerTodos()
    }   
}
