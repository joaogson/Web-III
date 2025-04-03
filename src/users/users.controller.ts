import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
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
getOne(@Param('id', ParseIntPipe) id:number){
    return this.userService.findOne(id)
}

@Post("/create")
createUser(@Body() CreateUserDto: CreateUserDto){
    return this.userService.createUser(CreateUserDto)
}

@Patch(":id")
updateUser(@Param('id', ParseIntPipe) id:number, @Body() UpdateUserDto: UpdateUserDto){
    return this.userService.updateUser(id, UpdateUserDto);
}

@Delete(":id")
deleteUser(@Param('id', ParseIntPipe) id:number){
    return this.userService.deleteUser(id)
}

}