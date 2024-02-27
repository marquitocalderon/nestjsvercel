// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger con URLs actualizadas
  const swaggerOptions = {
    customSiteTitle: 'Backend Generator',
    customJs: [
      'https://cdn.jsdelivr.net/npm/swagger-ui-dist@4.7.1/swagger-ui-bundle.js',
      'https://cdn.jsdelivr.net/npm/swagger-ui-dist@4.7.1/swagger-ui-standalone-preset.js',
    ],
    customCssUrl: [
      'https://cdn.jsdelivr.net/npm/swagger-ui-dist@4.7.1/swagger-ui.css',
    ],
  };

  const config = new DocumentBuilder()
    .setTitle('Backend Generator')
    .setDescription('Documentation API Test')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, swaggerOptions);

  // Configuración de CORS
  app.enableCors();

  // Configuración de validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  // Escuchar en el puerto 4000
  await app.listen(4000);
}
bootstrap();
