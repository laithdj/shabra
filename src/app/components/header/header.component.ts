import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public mainservice: MainService) {
  }
  ngOnInit() {
  }
}
