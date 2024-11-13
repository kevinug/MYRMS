import { Component, Input, OnInit } from '@angular/core';
import { RoomService, Room } from '../room.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    console.log("b");
    console.log(this.rooms);
    // Recupera tutte le stanze dal servizio
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;   
      
    });
  }

  updateStatus(room: any, status: 'clean' | 'dirty' | 'check-in' | 'full') {
    console.log('Updating room status for room', room.id, 'to', status);  // Log per verificare
    this.roomService.updateRoomStatus(room.id, status).subscribe(
      (updatedRoom) => {
        console.log('Updated room:', updatedRoom);  // Log della risposta aggiornata
        const roomToUpdate = this.rooms.find(r => r.id === room.id);
        if (roomToUpdate) {
          roomToUpdate.status = updatedRoom; 
        }
      },
      (error) => {
        console.error('Error updating room status:', error);
      }
    );
  }
}