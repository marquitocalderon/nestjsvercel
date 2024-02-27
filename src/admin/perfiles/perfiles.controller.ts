import { Controller, Patch } from '@nestjs/common';

@Controller('perfiles')
export class PerfilesController {


    @Patch()
    actualizarPatch(){
        return "hiciste un patch"
    }

}
