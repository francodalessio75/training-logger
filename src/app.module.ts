/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExercisesModule } from './exercises/exercises.module';
import { WorkoutSessionsModule } from './workout-sessions/workout-sessions.module';
import { LoggerMiddleware } from './shared/middlewares/logger.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    ExercisesModule,
    WorkoutSessionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('exercises', 'workout-sessions');
  }
}
