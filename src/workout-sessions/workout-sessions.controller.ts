/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { WorkoutSessionsService } from './workout-sessions-service';
import { WorkoutSession } from './interfaces/workout-session.interface';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateWorkoutSessionDto } from './dto/create-workout-session.dto';

@ApiTags('workout-sessions')
@Controller('workout-sessions')
export class WorkoutSessionsController {

    constructor(private readonly workoutSessionsService: WorkoutSessionsService) { }

    @Get()
    getWorkoutSessions(): Promise<WorkoutSession[]> {
        return this.workoutSessionsService.getWorkoutSessions();
    }

    @ApiParam({ name: 'id' })
    @Get(':id')
    getWorkoutSession(@Param('id') id): Promise<WorkoutSession> {
        return this.workoutSessionsService.getWorkoutSession(id);
    }
    
    @Post('')
    async createWorkoutSession(@Body() createWorkoutSessionDto: CreateWorkoutSessionDto): Promise<WorkoutSession> {
        try {
            return await this.workoutSessionsService.createWorkoutSession(createWorkoutSessionDto);
        } catch (error) {
            throw new HttpException( error.message, HttpStatus.UNPROCESSABLE_ENTITY );
        }
    }
    
    @ApiParam({ name: 'id' })
    @Put(':id')
    updateWorkoutSession(@Param('id') id, @Body() createWorkoutSessionDto: CreateWorkoutSessionDto): Promise<WorkoutSession> {
        return this.workoutSessionsService.updateWorkoutSession(id, createWorkoutSessionDto);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    deleteWorkoutSession(@Param('id') id): Promise<WorkoutSession> {
        return this.workoutSessionsService.deleteWorkoutSession(id);
    }

}
