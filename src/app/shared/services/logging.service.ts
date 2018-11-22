import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  logStatusChange(status:string){
    return console.log(`The server status changed to : ${status}`);
  }
}
