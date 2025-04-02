import { Module } from "@nestjs/common";
import { TeacherController } from "./teachers.controller";
import { TeacherService } from "./teachers.service";


@Module({
    imports: [],
    controllers: [TeacherController],
    providers: [TeacherService],
})
export class TeacherModule{}