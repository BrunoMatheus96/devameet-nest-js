import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Decorator do estilo módulo
/*Módulo é um agrupamento de arquivo que fechamos como se fosse um micro serviço. Então módulo é uma parte do código
que funciona de forma autonoma (pode ter entrada e aída) mas funciona sozinho.*/
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
