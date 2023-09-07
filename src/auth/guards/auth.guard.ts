/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { FirebaseService } from '../firebase/firebase.service';
//criar uma conta firebase
// Instalar o Firebase Admin
//

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly firebase: FirebaseService){
    
  }

  canActivate(context: ExecutionContext): Promise<boolean>{
    const request = context.switchToHttp().getRequest<Request>();

    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException();
    }

    console.log(token);
    return this.firebase.verifyToken(token);
  }
}
