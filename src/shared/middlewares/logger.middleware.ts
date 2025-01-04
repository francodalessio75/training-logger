/* eslint-disable prettier/prettier */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    Logger.log(`req:`, {
      headers: req.headers,
      body: req.body,
      originalUrl: req.baseUrl+req.url,
    });
    next();
  }
}
