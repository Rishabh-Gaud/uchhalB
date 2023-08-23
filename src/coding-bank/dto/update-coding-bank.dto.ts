import { PartialType } from '@nestjs/mapped-types';
import { CreateCodingBankDto } from './create-coding-bank.dto';

export class UpdateCodingBankDto extends PartialType(CreateCodingBankDto) {}
