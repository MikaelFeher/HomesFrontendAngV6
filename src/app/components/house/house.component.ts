import { Component, OnInit } from '@angular/core';
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
  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.getHouseById(this.id);

    setInterval(() => {
      this.getHouseById(this.id);
    },3000);
  }

  getHouseById(id) {
    this.dataService.getHouseById(id)
    .subscribe(data => {
      this.house = data;
    });
  }
}
