import { NgModule } from '@angular/core';
import {
   MatButtonModule, 
   MatDialogModule,
   MatTableModule, 
  } from '@angular/material'


const MaterialComonent=[
  MatDialogModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  exports:[MaterialComonent],
  imports: [MaterialComonent]
})
export class MaterialModule { }
