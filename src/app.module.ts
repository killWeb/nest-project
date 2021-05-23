import { resolve } from 'path';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesController } from './files/files.controller';
import { LoggerMiddleWare } from './middleware/logger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController, FilesController],
  providers: [AppService],
})
export class AppModule {
  configure(consurmer: MiddlewareConsumer) {
    consurmer
      .apply(LoggerMiddleWare)
      .forRoutes('/')
  }
}
