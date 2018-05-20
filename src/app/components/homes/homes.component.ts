import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})

export class HomesComponent implements OnInit {
  homes : {}
  interval: any;
 
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.getHomes();

    this.interval = setInterval(() => {
      this.getHomes();
    },3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getHomes() {
    this.dataService.getHomes()
    .subscribe(data => {
      this.homes = [data];
      this.homes = this.homes[0].homes;
      console.log(this.homes);
      
    });
  }

  getHouseById(id) {
    this.router.navigateByUrl(`homes/${id}`);
  }
}



