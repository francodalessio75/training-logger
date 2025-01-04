/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from './interfaces/exercise-interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExercisesService {

    constructor( 
        @InjectModel('Exercise') 
        private readonly exerciseModel: Model<Exercise>
    ) {}


    async getExercises(): Promise<Exercise[]> {
        return await this.exerciseModel.find().exec();
    }
    
    async getExercise(id: string): Promise<Exercise> {
        try{
            return await this.exerciseModel.findById(id).exec();
        } catch(e) {
            throw new HttpException('Exercise not found', HttpStatus.NOT_FOUND);
        }
    }
    
    async createExercise( exerciseData: CreateExerciseDto): Promise<Exercise> {
        return await this.exerciseModel.create(exerciseData).then(exercise => exercise.save());
    }
    
    async updateExercise(id:string, exerciseData: CreateExerciseDto): Promise<Exercise> {
        return await this.exerciseModel.findByIdAndUpdate(id, exerciseData).exec();
    }

    async deleteExercise(id:string): Promise<Exercise> {
        return await this.exerciseModel.findByIdAndDelete(id).exec();
    }
}
