import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})

export class HomesComponent implements OnInit {
  homes : {}
 
  constructor(private dataService:DataService) { }

  ngOnInit() {
    setInterval(() => {
      this.getHomes();
    },3000);
  }

  getHomes() {
    this.dataService.getHomes()
    .subscribe(data => {
      this.homes = data;
    });
  }
}



