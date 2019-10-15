import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client'
@Component({
  selector: 'app-interfacedialogue',
  templateUrl: './interfacedialogue.component.html',
  styleUrls: ['./interfacedialogue.component.css']
})
export class InterfacedialogueComponent implements OnInit {
  const Stomp = require('webstomp-client')


  ngOnInit() {
  }
  title = 'grokonez';
  description = 'Angular-WebSocket Demo';
 
  greetings: string[] = [];
  disabled = true;
  name: string;
  private stompClient = null;
 
  constructor() { }
 
  setConnected(connected: boolean) {
    this.disabled = !connected;
 
    if (connected) {
      this.greetings = [];
    }
  }
 
  connect() { 
    const socket = new SockJS('http://localhost:8685/gkz-stomp-endpoint');
    this.stompClient = Stomp.over(socket);
 
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
 
      _this.stompClient.subscribe('/topic/hi', function (hello) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });
    });
  }
 
  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
 
    this.setConnected(false);
    console.log('Disconnected!');
  }
 
  sendName() {
    this.stompClient.send(
      '/gkz/hello',
      {},
      JSON.stringify({ 'name': this.name })
    );
  }
 
  showGreeting(message) {
    this.greetings.push(message);
  }
}
