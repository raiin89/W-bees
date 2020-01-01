import { Injectable } from '@angular/core';
import {
            MatSnackBar,
            MatSnackBarHorizontalPosition,
            MatSnackBarVerticalPosition,
        } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakBarService {

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snakbar: MatSnackBar) { }

  success(message: string): void{
      this.snakbar.open(message, 'success!', {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
  }

  error(message: string): void{
    this.snakbar.open(message, 'error!', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
