import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  constructor(public dialogRef: MatDialogRef<CharacterDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  close(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }
}

