import { StudentResponseDto } from './../student/dto/student.dto';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { Injectable } from '@nestjs/common';
import {teachers,students} from '../db'



@Injectable()
export class TeacherService {
    private teacher = teachers
    private students = students

    getTeachers():FindTeacherResponseDto[] {
        return this.teacher
    }

    getTeacherById(teacherId:string):FindTeacherResponseDto{
        return this.teacher.find(teacher => {
            return teacher.id === teacherId;
        })
    }

    getStudentTeacherById(teacherId:string):FindTeacherResponseDto[]{
        return this.students.filter(student=>{
            return student.teacher === teacherId;
        })
    }

    updateStudentTeacher(teacherId:string,studentId:string):StudentResponseDto{
        let updatedStudent : StudentResponseDto;

        const updateStudentList = this.students.map(student=>{
            if(student.id === studentId){
                updatedStudent = {
                    teacher: teacherId,
                    ...student
                }
            } else return student;
        });

        this.students = updateStudentList;
        return updatedStudent;
    }
}
