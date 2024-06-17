import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { Request, Response, NextFunction } from 'express';

const { MONGO_URI = 'mongodb://localhost/nest' } = process.env


// Fallback Middleware
function fallbackToIndex(req: Request, res: Response, next: NextFunction) {
  if (!req.accepts('html')) {
    return next(); // Let other middleware handle non-HTML requests
  }

  const indexFile = join(__dirname, '..', 'public', 'index.html'); // Adjust if needed
  res.sendFile(indexFile, (err) => {
    if (err) {
      next(err); // Pass errors to NestJS error handling
    }
  });
}

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(MONGO_URI), UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(fallbackToIndex)
      .forRoutes('*'); // Apply to all routes (after other routes are handled)
  }
}
