import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CrearCategoriaDto } from './dto/categorias.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("categorias")
@Controller('categorias')
export class CategoriasController {

    constructor(private categoriaService: CategoriasService){}

    @Get()
    getCategorias(){
        return this.categoriaService.obtenerTodoslosCategorias()
    }

   
    @Get(':id')
    getCategoriabyID(@Param('id', ParseIntPipe) id:number){
        return this.categoriaService.obtenerPorID(id)
    }


    @Post()
    postCategorias(@Body() datosFronted: CrearCategoriaDto){
         return this.categoriaService.crearCategorias(datosFronted)
    }

}
