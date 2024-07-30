import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from 'express';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular1';
  constructor(private service: SharedServiceService) { }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.service.changeData(inputElement.value);
  }

}
