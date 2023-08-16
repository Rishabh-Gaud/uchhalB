// user.dto.ts
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsNumber()
  pincode: number;

  @IsOptional()
  @IsString()
  address: string;
}

export class LoginDTO {
  @IsNotEmpty()
  @IsString()
  userkey: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}