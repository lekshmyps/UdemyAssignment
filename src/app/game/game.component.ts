import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  interval: any;
  @Output() intervalFired= new EventEmitter<number>();
  lastNumber=0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval=setInterval(() => {
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    },1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
