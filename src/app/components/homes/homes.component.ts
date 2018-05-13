import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})

export class HomesComponent implements OnInit {
  homes : {}

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getHomes()
      .subscribe(data => {
        this.homes = data;
        console.log('this.homes: ', this.homes)
      });
  }
}



