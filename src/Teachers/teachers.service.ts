import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Teacher } from './entities/teachers.entity';
import { CreateGuestDto } from 'src/guests/dto/create-guest.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeacherService {

  private teachers: Teacher[] = [
    {
      id: 1,
      name: 'Joao',
      age: 20,
      subject: 'Math',
    },
    {
      id: 2,
      name: 'Eliza',
      age: 23,
      subject: 'English',
    },

]
  listAllTeachers() {
    return this.listAllTeachers();
  }

  findOne(id){

    const teacher = this.teachers.findIndex(teacher=> teacher.id===Number(id))

if(teacher) return teacher

throw new HttpException("Professor não encontrado", HttpStatus.NOT_FOUND)
}

createTeacher(createTeacherDto: CreateTeacherDto){
  const newId = this.teachers.length + 1;

  const newTeacher = {
    id: newId,
    ...createTeacherDto,
  };

  this.teachers.push(newTeacher);

  return newTeacher;
}


updateTeacher(id, UpdateTeacherDto){
  const teacherIndex = this.teachers.findIndex(teacher=> teacher.id===Number(id))

  if(teacherIndex >= 0){
    const teacherItem = this.teachers[teacherIndex]
      this.teachers[teacherIndex] = {
        ...teacherItem,
        ...UpdateTeacherDto
    }
  }
    return "Atualizando Professor"
}

deleteTeacher(id){
  const teacherIndex = this.teachers.findIndex(teacher=> teacher.id===Number(id))

  if(teacherIndex < 0){
    throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)
}

this.teachers.splice(teacherIndex, 1)

return "Convidado removido"
}
}


