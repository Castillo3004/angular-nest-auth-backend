import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';      // Restringe el envio de informacion, debe ser tal cual los parametros

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes( 
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );


  await app.listen(3000);
}
bootstrap();
