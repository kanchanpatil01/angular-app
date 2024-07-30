import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  data: string = '';
  constructor(private sharedService: SharedServiceService) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => this.data = data);
  }

}
