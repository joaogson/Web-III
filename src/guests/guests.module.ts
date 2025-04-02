import { Module } from "@nestjs/common";
import { GuestController } from "./guests.controller";
import { GuestService } from "./guests.service";

@Module({
    imports: [],
    controllers: [GuestController],
    providers: [GuestService],

})
export class GuestModule{}