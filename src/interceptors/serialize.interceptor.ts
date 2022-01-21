import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass, plainToInstance } from 'class-transformer';
import { UserDto } from '../users/dto/user.dto';

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
