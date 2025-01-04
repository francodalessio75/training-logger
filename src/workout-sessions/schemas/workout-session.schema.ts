/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { ExerciseSchema } from 'src/exercises/schemas/exercise.schema';

export const WorkoutSessionSchema = new mongoose.Schema({
    date: { type: Date, required: [true, 'workout session date missing'] },
    name: { type: String, required: [true, 'workout session name missing'] },
    description: { type: String, required: [true, 'workout session description missing'] },
    exercises: [ExerciseSchema],
});