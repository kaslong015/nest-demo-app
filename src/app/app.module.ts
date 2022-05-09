import { TeacherService } from './../teacher/teacher.service';
import { StudentService } from './../student/student.service';
import { TeacherController } from './../teacher/teacher.controller';
import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';


@Module({
  imports: [],
  controllers:[StudentController,TeacherController],
  providers:[StudentService,TeacherService]
  
})

export class AppModule { }
