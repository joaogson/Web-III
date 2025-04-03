import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { GuestService } from "./guests.service";
import { CreateGuestDto } from "./dto/create-guest.dto";
import { UpdateGuestDto } from "./dto/update-guest.dto";


@Controller("/guests")
export class GuestController{

    constructor(private readonly guestService: GuestService){}

@Get()
getAll(@Query('limit') limit: string){
    return this.guestService.listAllGuests()
}

@Get(":id")
getById(@Param('id', ParseIntPipe) id: number){
    return this.guestService.findOne(id)
}

@Post("/create")
CreateGuest(@Body() CreateGuestDto: CreateGuestDto){
    return this.guestService.create(CreateGuestDto)
}

@Patch(":id")
updateGuest(@Param("id", ParseIntPipe) id:number, @Body() UpdateGuestDto:UpdateGuestDto){

    return this.guestService.update(id, UpdateGuestDto)
}

@Delete(":id")
deleteGuest(@Param("id", ParseIntPipe) id: number){
return this.guestService.delete(id)
}
}