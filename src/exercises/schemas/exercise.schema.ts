/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ExerciseSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'exercise name missing'] },
    description: { type: String, required: [true, 'exercise description missing'] },
    muscleGroup: { type: String, required: [true, 'muscle group missing'] },
    setsNumber: { type: Number, required: [true, 'sets number missing'] },
    repetitionsNumber: { type: Number, required: [true, 'repetitions number missing'] },
    load: { type: Number, required: [true, 'load missing'] },
});