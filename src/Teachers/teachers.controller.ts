import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { TeacherService } from "./teachers.service";
import { UpdateGuestDto } from "src/guests/dto/update-guest.dto";
import { CreateGuestDto } from "src/guests/dto/create-guest.dto";


@Controller("/teachers")
export class TeacherController{

    constructor(private readonly teacherService: TeacherService){}

@Get()
getAll(){
    return this.teacherService.listAllTeachers()
}

@Get(":id")
getById(@Param('id', ParseIntPipe) id:number){
    return this.teacherService.findOne(id)
}

@Post("/create")
createTeacher(@Body() CreateGuestDto: CreateGuestDto){
    return this.teacherService.createTeacher
}

@Patch(":id")
updateTeacher(@Param('id', ParseIntPipe) id: number, @Body() UpdateTeacherDto: UpdateGuestDto){
    return this.updateTeacher(id, UpdateTeacherDto)
}

@Delete(":id")
deleteTeacher(@Param('id', ParseIntPipe) id: number){
    return this.teacherService.deleteTeacher(id)
}



}