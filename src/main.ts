import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';      // Restringe el envio de informacion, debe ser tal cual los parametros

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors();     // Para habilitar el CORS, problema que a veces surge por el navegador 

  app.useGlobalPipes( 
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
