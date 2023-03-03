import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { CharacterDetailsComponent } from '../app/character-details/character-details.component';

interface Character {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  statusClass: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: Character[] = [];
  currentPage = 1;

  title = 'rick-and-morty';

  constructor(private http: HttpClient, private dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    const url = `https://rickandmortyapi.com/api/character/?page=${this.currentPage}`;

    this.http.get<any>(url).subscribe((data) => {
      this.characters = this.characters.concat(data.results);
      console.log(this.characters);
    });
  }

  loadMore() {
    this.currentPage++;
    this.loadCharacters();
  }

  showDetails(character: any): void {
    const dialogRef = this.dialog.open(CharacterDetailsComponent, {
      data: character
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}