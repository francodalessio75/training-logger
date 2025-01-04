/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { MuscleGroup } from "src/enums/muscle-group.enum";

export class CreateExerciseDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  muscleGroup: MuscleGroup;
  @ApiProperty()
  setsNumber: number;
  @ApiProperty()
  repetitionsNumber: number;
  @ApiProperty()
  load: number;
}