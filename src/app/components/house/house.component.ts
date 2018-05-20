import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  id: String;
  house: {};
  interval: any;

  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.getHouseById(this.id);

    this.interval = setInterval(() => {
      this.getHouseById(this.id);
    },3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getHouseById(id) {
    this.dataService.getHouseById(id)
    .subscribe(data => {
      this.house = [data];
      this.house = this.house[0].house;
    });
  }
}
