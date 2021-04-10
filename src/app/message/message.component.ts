import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // message:string=[];  
  todayDate;
  constructor(private messageService:MessageService) { }
    
    getMessage(){
      return this.messageService.message;
      
    }  
    reset()
    {
      this.messageService.clear()
    }
  ngOnInit(): void {
    this.getMessage();
    this.messageService.addMessage('Getting started' );
    this.todayDate=this.messageService.showDate();

  }

}
