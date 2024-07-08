
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SocketService {
    private socket: Socket;
    private readonly apiUrl = 'http://localhost:3000';

    constructor() {

        this.socket = io(this.apiUrl);
    }

    emit(eventName: string, data: any): void {
        this.socket.emit(eventName, data);
    }

    listen(eventName: string): Observable<any> {

        console.log("we are listening the event")
        return new Observable((observer) => {
            this.socket.on(eventName, (data: any) => {
                observer.next(data);
            });


            return () => {
                this.socket.off(eventName);
            };
        });
    }
}