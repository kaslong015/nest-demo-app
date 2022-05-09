import { StudentResponseDto } from './../student/dto/student.dto';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { Controller, Post, Put, Get, Body, Param } from '@nestjs/common';
import { TeacherService } from './teacher.service';



@Controller('teachers')
export class TeacherController {

    constructor(private teacherService:TeacherService) {}

    @Get()
    getTeachers():FindTeacherResponseDto[] {
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ):FindTeacherResponseDto {
        return this.teacherService.getTeacherById(teacherId);
    }

    @Get('/:teacherId/student')
    getStudentTeacher(@Param('teacherId') teacherId: string)
    :FindTeacherResponseDto[] {
        return this.teacherService.getStudentTeacherById(teacherId);
    }

    @Put('/:teacherId/student/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string)
        :StudentResponseDto {
        return this.teacherService.updateStudentTeacher(teacherId,studentId)
    }

}
