import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from '../character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  character: Character = this.data;
  constructor(public dialogRef: MatDialogRef<CharacterDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: Character) {}

  getStatusClass(status: string): string {
    if (status === 'Alive') {
      return 'alive';
    } else if (status === 'Dead') {
      return 'dead';
    } else {
      return 'unknown';
    }
  }

  ngOnInit(): void {
    const status = this.character.status.toLowerCase();
    const modalContainer = document.getElementsByClassName('mat-dialog-container')[0] as HTMLElement;
    modalContainer.classList.add(status);
  }

  close(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
}

