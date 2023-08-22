import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComonent = [
  MatDialogModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  exports: [MaterialComonent],
  imports: [MaterialComonent]
})
export class MaterialModule { }
