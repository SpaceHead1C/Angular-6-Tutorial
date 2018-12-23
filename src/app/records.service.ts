import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData() {
    return [
      {
        name: 'some',
        online: false
      },
      {
        name: 'this',
        online: true
      },
      {
        name: 'that',
        online: true
      },
      {
        name: 'other',
        online: false
      },
      {
        name: 'nobody',
        online: true
      },
      {
        name: 'spy',
        online: false
      }
    ];
  }
}
