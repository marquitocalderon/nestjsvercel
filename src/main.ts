import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

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
      // Utiliza los presets de SwaggerUIBundle
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      // Otras opciones si es necesario
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
