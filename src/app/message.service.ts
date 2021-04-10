import { Injectable } from '@angular/core';
// import{MessageComponent} from './message.component';
@Injectable({
  //the root is available to whole project
  providedIn: 'root'
})
export class MessageService {
  message : string[] = [];

  addMessage(messages:string)
  {
   
    this.message.push(messages);
    return this.message;
  }
  getMessage()
  {
    return this.message;  
  }
  clear()
  {
    this.message=[];  
  }
  showDate()
  {
    let date = new Date();
    return date;
  }
  constructor() { }
}
