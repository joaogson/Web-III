import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { GuestModule } from 'src/guests/guests.module';
import { TeacherModule } from 'src/Teachers/teachers.module';



@Module({
  imports: [UsersModule, GuestModule, TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
