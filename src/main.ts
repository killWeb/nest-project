import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Api document')
    .setDescription('The api for my nest-project')
    .setVersion('1.0')
    .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();

