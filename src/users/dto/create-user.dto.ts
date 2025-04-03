import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto{

    @IsString({message: "O nome deve ser uma string"})
    @MinLength(1, {message: "O nome deve ter pelo menos 1 caracter"})
    @MaxLength(60, {message: "O nome deve ter no maximo 60 caracteres"})
    readonly name: string

    @IsNumber()
    @MinLength(1, {message: "A idade deve ter pelo menos um caracter"})
    readonly age: number

    @IsString({message: "O nome deve ser uma string"})
    @MinLength(1, {message: "O nome deve ter pelo menos 1 caracter"})
    readonly gender: string
}