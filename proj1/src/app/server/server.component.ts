import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allow=false;
  count=0;
  name='';
  countshow=false;
  constructor() {
    setTimeout(() => {
      this.allow=true;
    }, 5000);

  }

  ngOnInit(): void {
  }
  onCountInc(){
    this.countshow=true;
    this.count++;
  }
  onInsert(event : any){
    this.name=(<HTMLInputElement>event.target).value;
  }
}
