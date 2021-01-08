import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  public showMessage: boolean;
  public message: string;

  ngOnInit(): void {
    this.showMessage = false;
  }

  public alert(message: string)
  {
    this.message = message;
    this.showMessage = true;
  }
}
