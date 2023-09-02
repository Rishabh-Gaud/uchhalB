import { PartialType } from '@nestjs/mapped-types';
import { CreateMcqDto } from './create-mcq.dto';

export class UpdateMcqDto extends PartialType(CreateMcqDto) {}
