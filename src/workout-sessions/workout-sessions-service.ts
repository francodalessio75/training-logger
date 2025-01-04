/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { WorkoutSession } from './interfaces/workout-session.interface';
import { CreateWorkoutSessionDto } from './dto/create-workout-session.dto';

@Injectable()
export class WorkoutSessionsService {

    constructor( 
        @InjectModel('WorkoutSession') 
        private readonly workoutSessionsModel: Model<WorkoutSession>
    ) {}


    async getWorkoutSessions(): Promise<WorkoutSession[]> {
        return await this.workoutSessionsModel.find().exec();
    }
    
    async getWorkoutSession(id: string): Promise<WorkoutSession> {
        try{
            return await this.workoutSessionsModel.findById(id).exec();
        } catch(e) {
            throw new HttpException('Workout session not found', HttpStatus.NOT_FOUND);
        }
    }
    
    async createWorkoutSession( workoutSessionData: CreateWorkoutSessionDto): Promise<WorkoutSession> {
        return await this.workoutSessionsModel.create(workoutSessionData).then(exercise => exercise.save());
    }
    
    async updateWorkoutSession(id:string, exerciseData: CreateWorkoutSessionDto): Promise<WorkoutSession> {
        return await this.workoutSessionsModel.findByIdAndUpdate(id, exerciseData).exec();
    }

    async deleteWorkoutSession(id:string): Promise<WorkoutSession> {
        return await this.workoutSessionsModel.findByIdAndDelete(id).exec();
    }
}
