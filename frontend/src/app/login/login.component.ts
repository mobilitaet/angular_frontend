import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public username;
  public password;

  ngOnInit(): void {
  }

  public login()
  {
    if(this.username == "admin" && this.password == "admin")
    {
      console.log("LOGGED IN");
    }else{
      console.log(this.username, this.password);
    }
  }
}
