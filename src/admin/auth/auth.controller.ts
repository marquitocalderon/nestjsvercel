import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto, RefreshTokenDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PermisoPara } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { Role } from './enums/role.enum';
import { ApiExcludeEndpoint, ApiQuery } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiExcludeEndpoint()
    login(@Body() datosFronted: LoginDto) {
        return this.authService.login(datosFronted)
    }

    @UseGuards(AuthGuard, RolesGuard)
    @ApiExcludeEndpoint()
    @Post('refresh')
    refreshToken(@Body() datosFronted: RefreshTokenDTO) {
        return this.authService.generarToken_Con_REFRESH_TOKEN(datosFronted)
    }

    

    @Get('profile')
    @PermisoPara(Role.ADMIN)
    @ApiQuery({ name: 'param1', description: 'Description of param1', required: true })
    @UseGuards(AuthGuard, RolesGuard)
    profile(){
        return "HOLA USUARIO"
    }
        

}
