import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PerfilesModule } from "./admin/perfiles/perfiles.module";
import { UsuariosModule } from "./admin/usuarios/usuarios.module";
import { CloudinaryModule } from "./admin/cloudinary/cloudinary.module";
import { AuthModule } from "./admin/auth/auth.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientesModule } from './clients/clientes/clientes.module';
import { CategoriasModule } from './admin/categorias/categorias.module';
import { MarcasModule } from './admin/marcas/marcas.module';
import { TallasModule } from './admin/tallas/tallas.module';
import { GenerosModule } from './admin/generos/generos.module';
import { ProductosModule } from './admin/productos/productos.module';
import { StripeModule } from './admin/stripe/stripe.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === "true",
      extra: {
        ssl:
          process.env.POSTGRES_SSL === "true"
            ? {
              rejectUnauthorized: false,
            }
            : null,
      },
    }),
    PerfilesModule,
    UsuariosModule,
    CloudinaryModule,
    AuthModule,
    ClientesModule,
    CategoriasModule,
    MarcasModule,
    TallasModule,
    GenerosModule,
    ProductosModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
