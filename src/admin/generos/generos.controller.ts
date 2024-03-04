import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CrearGeneroDto } from './dto/generos.dto';

@Controller('generos')
export class GenerosController {


    constructor(private generoService: GenerosService){}

    
    @Get()
    getCategorias(){
        return this.generoService.obtenerTodos()
    }

   
    @Get(':id')
    getCategoriabyID(@Param('id', ParseIntPipe) id:number){
        return this.generoService.obtenerPorID(id)
    }


    @Post()
    postGenero(@Body() datosdelFrontend: CrearGeneroDto){

        return this.generoService.crearGenero(datosdelFrontend)

    }


}
