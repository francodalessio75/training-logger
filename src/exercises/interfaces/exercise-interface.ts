/* eslint-disable prettier/prettier */
import { MuscleGroup } from "src/enums/muscle-group.enum";

export interface Exercise { 
    id?:string;
    name:string;
    description:string;
    muscleGroup:MuscleGroup;
    setsNumber?: number;
    repetitionsNumber?: number;
    load: number;
}