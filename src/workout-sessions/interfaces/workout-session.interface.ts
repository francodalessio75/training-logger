/* eslint-disable prettier/prettier */

import { Exercise } from "../../exercises/interfaces/exercise-interface";

export interface WorkoutSession { 
    id?:string;
    date:Date;
    name:string;
    description:string;
    exercises: Exercise[];
}