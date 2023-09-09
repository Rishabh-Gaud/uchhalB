import {
    IsString,
    IsNotEmpty,
    IsOptional,
    MinLength,
  } from 'class-validator';



export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
	companyName:string;

  @IsNotEmpty()
  @IsString()
	title:string;

  @IsNotEmpty()
  @IsString()
	location:string;

  @IsNotEmpty()
  @IsString()
	imageUrl:string;

  @IsNotEmpty()
  @IsString()
	type:string;

  @IsNotEmpty()
  @IsString()
	redirectLink:string;

  @IsNotEmpty()
  @IsString()
	requiredExperience:string;

  @IsNotEmpty()
  @IsString()
	salary:string;

  @IsNotEmpty()
  @IsString()
	skills:string;

  @IsNotEmpty()
  @IsString()
	createdAt:string;

}
