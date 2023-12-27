import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

//Decorator do estilo módulo
/*Módulo é um agrupamento de arquivo que fechamos como se fosse um micro serviço. Então módulo é uma parte do código
que funciona de forma autonoma (pode ter entrada e aída) mas funciona sozinho.*/
@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
