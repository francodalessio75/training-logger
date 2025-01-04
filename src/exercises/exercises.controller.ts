/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { Exercise } from './interfaces/exercise-interface';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@ApiTags('exercises')
@Controller('exercises')
export class ExercisesController {

    constructor(private readonly exercisesService: ExercisesService) { }

    @Get()
    getExercises(): Promise<Exercise[]> {
        return this.exercisesService.getExercises();
    }

    @ApiParam({ name: 'id' })
    @Get(':id')
    getExercise(@Param('id') id): Promise<Exercise> {
        return this.exercisesService.getExercise(id);
    }
    
    @Post()
    async createExercise(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise> {
        try {
            return await this.exercisesService.createExercise(createExerciseDto);
        } catch (error) {
            throw new HttpException( error.message, HttpStatus.UNPROCESSABLE_ENTITY );
        }
    }
    
    @ApiParam({ name: 'id' })
    @Put(':id')
    updateExercise(@Param('id') id, @Body() createExerciseDto: CreateExerciseDto): Promise<Exercise> {
        return this.exercisesService.updateExercise(id, createExerciseDto);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    deleteExercise(@Param('id') id): Promise<Exercise> {
        return this.exercisesService.deleteExercise(id);
    }
}
