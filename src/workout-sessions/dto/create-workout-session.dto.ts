/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Exercise } from "src/exercises/interfaces/exercise-interface";

export class CreateWorkoutSessionDto {
  @ApiProperty()
  date: Date;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  exercises: Exercise;
}