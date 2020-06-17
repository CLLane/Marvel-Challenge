import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {
  creators;
  items;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCreators().subscribe((data) => {
      // console.log('data :>> ', data);
      this.creators = data['data']['results']
      
    })
  }
  findComics(creatorId) {
    this.apiService.getCreatorItems(creatorId).subscribe((data) => {
      // console.log('data', data)
      this.items = data['data']['results']
      console.log('this.items', this.items)
    })
  }

}
