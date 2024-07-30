import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private dataSubject = new BehaviorSubject<string>('Initial Data');
  currentData = this.dataSubject.asObservable();

  constructor() { }

  changeData(data: string) {
    this.dataSubject.next(data);
  }
}
