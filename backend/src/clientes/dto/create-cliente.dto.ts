import { IsEmail, IsString, IsOptional } from "class-validator";

export class CreateClienteDto {
    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @IsOptional()
    @IsString({ message: 'Nome deve ser uma string' })
    name: string;

    @IsString({ message: 'Senha deve ser uma string' })
    @IsString()
    password: string;
  }
  