import { FindStudentResponseDto, CreateStudentDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { Injectable } from '@nestjs/common';
import {students} from '../db';
import {v4 as uuid} from 'uuid';

@Injectable()
export class StudentService {

    private students = students;

    getStudents(): FindStudentResponseDto[]{
        return this.students;
    }

    getStudentById(studentId:string): FindStudentResponseDto {
        return this.students.find(student =>{
            return student.id === studentId;
        })
    }

    createStudent(payload:CreateStudentDto):StudentResponseDto{
        let newStudent = {
            id:uuid(),
            ...payload

        }

        this.students.push(newStudent)

        return newStudent;

    }

    updateStudents(payload:UpdateStudentDto,studentId:string){
        let updatedStudent : StudentResponseDto;

        const updateStudentList = this.students.map(student=>{
            if(student.id === studentId){
                updatedStudent = {
                    id: studentId,
                    ...payload
                }
            } else return student;
        });

        this.students = updateStudentList;
        return updatedStudent;
            
    }

    
}
