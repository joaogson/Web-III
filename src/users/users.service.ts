import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Teacher } from 'src/Teachers/entities/teachers.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Joao',
      age: 20,
      gender: 'masculino'
    },
    {
      id: 1,
      name: 'Eliza',
      age: 23,
      gender: 'feminino'
    },
  ];

  listAllUsers() {
    return this.users
  }

  findOne(id: number) {

    const guest = this.users.find(guest => guest.id == id)

    if (guest) return guest

    throw new HttpException("Esse convidado não existe", HttpStatus.NOT_FOUND)
  }

  createUser(CreateUserDto: CreateUserDto) {
    const newId = this.users.length + 1;

    const newUser = {
      id: newId,
      ...CreateUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(id: number, UpdateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(guest => guest.id == id)


    if (userIndex >= 0) {
      const guestItem = this.users[userIndex]
      this.users[userIndex] = {
        ...guestItem,
        ...UpdateUserDto
      }
    }
    return "Atualizando Convidado"
  }

  deleteUser(id: number) {
    const userIndex = this.users.findIndex(guest => guest.id === id)


    if (userIndex < 0) {
      throw new HttpException("Esse convidado não existe!", HttpStatus.NOT_FOUND)
    }
    this.users.splice(userIndex, 1)

    return "Convidado removido"
  }
}
