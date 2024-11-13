import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Room {
  id: number;
  status: 'clean' | 'dirty' | 'check-in' | 'full';
}

@Injectable({
  providedIn: 'root'
})
export class RoomService{

  private apiUrl = 'http://localhost:8080/api/rooms';
  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}`);
  }

  updateRoomStatus(roomId: number, status: 'clean' | 'dirty' | 'check-in' | 'full'): Observable<'clean' | 'dirty' | 'check-in' | 'full'> {
    return this.http.put<'clean' | 'dirty' | 'check-in' | 'full'>(`${this.apiUrl}/${roomId}/status`, { status });
  }
}