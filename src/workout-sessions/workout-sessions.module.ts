/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkoutSessionSchema } from './schemas/workout-session.schema';
import { WorkoutSessionsController } from './workout-sessions.controller';
import { WorkoutSessionsService } from './workout-sessions-service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'WorkoutSession', schema: WorkoutSessionSchema}  
        ])
    ],
    controllers: [WorkoutSessionsController],
    providers: [WorkoutSessionsService],
})
export class WorkoutSessionsModule {}
