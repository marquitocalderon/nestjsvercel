import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerUIBundle } from 'swagger-ui-dist';  // Importa Swagger UI

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('DOCUMENTACION')
    .setDescription('API Documentation SOLICITUDES')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      // Aquí puedes configurar opciones de Swagger UI si es necesario
      // En este caso, especificamos el bundle de Swagger UI que importamos
      swaggerUI: SwaggerUIBundle,
    },
  });

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  await app.listen(4000);
}

bootstrap();
