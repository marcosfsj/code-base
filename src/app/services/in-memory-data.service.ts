import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const foos = [
      {id: 1, fpa: "AAAAA", fpb: "B", fpc: false, fpd: 1},
      {id: 2, fpa: "BBBBB", fpb: "B", fpc: true, fpd: 2},
      {id: 3, fpa: "CCCCC", fpb: "B", fpc: true, fpd: 3},
      {id: 4, fpa: "DDDDDD", fpb: "B", fpc: false, fpd: 1},
      {id: 5, fpa: "EEEEEE", fpb: "B", fpc: true, fpd: 1},
      {id: 6, fpa: "FFFFFF", fpb: "B", fpc: false, fpd: 2},
      {id: 7, fpa: "GGGGGG", fpb: "B", fpc: true, fpd: 3},
      {id: 8, fpa: "HHHHHH", fpb: "B", fpc: false, fpd: 1},
      {id: 9, fpa: "IIIIIII", fpb: "B", fpc: true, fpd: 2},
      {id: 10, fpa: "jjjjjjjj", fpb: "B", fpc: true, fpd: 2}
    ];

    return { foos };

  }

  constructor() { }

}
