import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/authservice/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  constructor(public authservice1:AuthService) { }

  ngOnInit(): void {
   
  }
  sidebar(){
    this.authservice1.sidebar=true;
  }
   
}
