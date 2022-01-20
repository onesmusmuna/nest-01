import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    /**
     *
     * Code in here will run before a request is handled by a request handler.
     * Code returned in `nest.handle().pipe()` will run after a request is handled by a request handler.
     */
    console.log('AM running before tha handler', context);

    return next.handle().pipe(
      map((data: any) => {
        console.log('Am running after responce is handled', data);
      }),
    );
  }
}
