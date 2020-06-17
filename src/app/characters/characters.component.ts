import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.getCharacters().subscribe((data) => {
        console.log('data :>> ', data);
        this.characters = data['characters'];
      })
  }

}
