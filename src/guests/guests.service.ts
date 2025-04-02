import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Guest } from 'src/guests/entities/guests.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Injectable()
export class GuestService {
  private guests: Guest[] = [
    {
      id: 1,
      name: 'Joao',
      age: 20,
    },
    {
      id: 2,
      name: 'Eliza',
      age: 24,
    },
    {
      id: 3,
      name: 'Fulano',
      age: 30,
    },
    {
      id: 4,
      name: 'Ciclano',
      age: 22,
    },
  ];

  listAllGuests() {
    return this.guests;
  }

  findOne(id: string) {
    const guest = this.guests.find((guest) => guest.id == Number(id));

  if(guest) return guest

    throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)
  }

  create(CreateGuestDto: CreateGuestDto) {
    const newId = this.guests.length + 1;

    const newGuest = {
      id: newId,
      ...CreateGuestDto,
    };

    this.guests.push(newGuest);

    return newGuest;
  }

  update(id: string, UpdateGuestDto: UpdateGuestDto) {
    const guestIndex = this.guests.findIndex(guest => guest.id == Number(id))
  

    if(guestIndex >= 0){
      const guestItem = this.guests[guestIndex]
        this.guests[guestIndex] = {
          ...guestItem,
          ...UpdateGuestDto
      }
    }
      return "Atualizando Convidado"
  }

  delete(id: string) {
    const guestIndex = this.guests.findIndex(guest=> guest.id === Number(id))


    if(guestIndex < 0){
      throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)
}

this.guests.splice(guestIndex, 1)

return "Convidado removido"
  }
}
