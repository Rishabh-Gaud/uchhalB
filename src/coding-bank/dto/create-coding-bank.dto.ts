// user.dto.ts
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateCodingBankDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  difficulty: string;

  @IsNotEmpty()
  @IsString()
  order: string;

  @IsNotEmpty()
  videoId: string;

  @IsOptional()
  @IsString()
  link: string;

  @IsOptional()
  @IsString()
  problemStatement: string;

  @IsNotEmpty()
  @IsString()
  constraints: string;

  @IsOptional()
  starterCode: string;

  @IsOptional()
  @IsString()
  handlerFunction: string;

  @IsOptional()
  @IsString()
  starterFunctionName: string;

  @IsOptional()
  example: [];

  @IsOptional()
  testCase: []
}
