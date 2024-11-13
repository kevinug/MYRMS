import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room, RoomService } from '../room.service';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent{

  @Input() room!: Room; 

  constructor(private roomService: RoomService) {
    console.log(this.room);
  }

  ngOnInit(): void {
    if (this.room && this.room.id) {
      console.log(this.room.id); // verifica se la proprietà id è definita
    } else {
      console.log('La proprietà room o id non è definita');
    }
  }

updateStatus(room: Room, status: 'clean' | 'dirty' | 'check-in' | 'full') {
  this.room.status = status;
  this.roomService.updateRoomStatus(room.id, status).subscribe();
}  
}