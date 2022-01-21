import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

// A decorator
export function Serialize(dto: any) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    /**
     *
     * Code in here will run before a request is handled by a request handler.
     * Code returned in `nest.handle().pipe()` will run after a request is handled by a request handler.
     */

    return next.handle().pipe(
      map((data: any) => {
        return plainToInstance(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}
