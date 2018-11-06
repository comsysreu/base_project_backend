import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { DatabaseModule } from '../common/database/database.module';
import {  reportsProviders} from './reports.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ReportsController],
  providers: [ReportsService ,... reportsProviders],
})
export class ReportsModule {}