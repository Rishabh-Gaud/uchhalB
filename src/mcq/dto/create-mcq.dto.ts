import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateMcqDto {
  @IsOptional()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  explanation: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  correct: string;

  @IsOptional()
  options: []
}
