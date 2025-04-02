import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { getRandomValues } from "crypto";
import { GuestService } from "./guests.service";
import { brotliDecompress } from "zlib";
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
getById(@Param('id') id: string){
    return this.guestService.findOne(id)
}

@Post("/create")
CreateGuest(@Body() CreateGuestDto: CreateGuestDto){
    return this.guestService.create(CreateGuestDto)
}

@Patch(":id")
updateGuest(@Param("id") id:string, @Body() UpdateGuestDto:UpdateGuestDto){

    return this.guestService.update(id, UpdateGuestDto)
}

@Delete(":id")
deleteGuest(@Param("id") id: string){
return this.guestService.delete(id)
}
}