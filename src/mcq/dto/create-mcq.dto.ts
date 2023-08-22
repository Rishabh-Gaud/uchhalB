import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateMcqDto {
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
  explanation: string;

  @IsNotEmpty()
  correct: string;

  @IsOptional()
  @IsString()
  link: string;

  @IsOptional()
  options: []
}
