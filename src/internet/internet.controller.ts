    import { Controller, Get, UseGuards } from '@nestjs/common';
    import { ApiBearerAuth } from '@nestjs/swagger';
    import { AuthGuard } from 'src/admin/auth/guards/auth.guard';
    import { RolesGuard } from 'src/admin/auth/guards/roles.guard';

    @Controller('internet')
    export class InternetController {
        @ApiBearerAuth()
        @UseGuards(AuthGuard, RolesGuard)
        @Get()
        perticiointernet() {
            // Devuelve un objeto JSON con un mensaje
            return { mensaje: '¡Conexión a Internet verificada!2323' };
        }
    }
