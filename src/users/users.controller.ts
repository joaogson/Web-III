import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/users")
export class UsersController{

    constructor(private readonly userService: UsersService){}

@Get()
getAll(){
    return this.userService.listAllUsers()
}

@Get(":id")
getOne(@Param('id') id:string){
    return this.userService.findOne(id)
}

@Post("/create")
createUser(@Body() CreateUserDto: CreateUserDto){
    return this.userService.createUser(CreateUserDto)
}

@Patch(":id")
updateUser(@Param('id') id:number, @Body() UpdateUserDto: UpdateUserDto){
    return this.userService.update(id, UpdateUserDto);
}

@Delete(":id")
deleteUser(@Param('id') id:string){
    return this.userService.delete(id)
}

}