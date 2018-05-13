import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})

export class HomesComponent implements OnInit {
  homes : {}
 
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.getHomes();

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

  getHouseById(id) {
    this.router.navigateByUrl(`homes/${id}`);
  }
}



