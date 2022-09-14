import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/authservice/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  visibleSidebar1=false;    
  visibleSidebar2=false;    
  visibleSidebar3=false;    
  visibleSidebar4=false;    
  visibleSidebar5=false;  

  constructor(public authservice1:AuthService) { }

  ngOnInit(): void {
    
  }

}
