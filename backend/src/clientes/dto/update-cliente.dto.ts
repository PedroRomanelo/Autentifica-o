import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateClienteDto {
  @IsEmail({}, { message: 'Email inválido' })
  @IsOptional()  // Deixa o campo opcional para que não precise ser enviado se não quiser atualizar
  email?: string;

  @IsString({ message: 'Nome deve ser uma string' })
  @IsOptional()  // Nome opcional
  name?: string;

  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  @IsOptional()  // Senha opcional
  password?: string;
}
