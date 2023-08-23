import {
    IsString,
    IsNotEmpty,
    IsOptional,
    MinLength,
} from 'class-validator';

export class CreateTestDto {
    @IsNotEmpty()
    @IsString()
    testnumber: string;

    @IsOptional()
    @IsString()
    mcqs: [];

    @IsOptional()
    codings: []
}
