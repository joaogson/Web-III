import { PartialType } from "@nestjs/mapped-types"
import { CreateTeacherDto } from "./create-teacher.dto"


export class UpdateTeacherDto extends PartialType(CreateTeacherDto){

    
    readonly name: string
    readonly age: number
    readonly subject: string
}