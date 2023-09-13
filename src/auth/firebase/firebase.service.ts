/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import * as fireBaseAccount from '../FirebaseAccount.json';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  firebaseApp: admin.app.App;
  constructor(){
    admin.initializeApp({
      credential: admin.credential.cert(fireBaseAccount as admin.ServiceAccount)
    })
  }
  async verifyToken(token: string): Promise<boolean> {
    
    try{
      await this.firebaseApp.auth().verifyIdToken(token);
      return true;
    } catch(e){
        return false;
    }
  }
}
