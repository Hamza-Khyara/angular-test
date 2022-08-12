import { Component, OnInit } from '@angular/core';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-test';
  posts: any;
  
  constructor() {}
  ngOnInit() {} 
}
