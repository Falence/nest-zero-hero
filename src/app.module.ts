import { Module } from '@nestjs/common';
import { ModuleModule } from './tasks/module/module.module';

@Module({
  imports: [ModuleModule],
})
export class AppModule {}
