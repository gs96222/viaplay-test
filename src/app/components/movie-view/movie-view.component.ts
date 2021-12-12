import { Inject,Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  movieName:string;
  year: number;
  image: string;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<MovieViewComponent>) { 
  }

  ngOnInit(): void {
    if(this.data){
      this.movieName = this.data.name;
      this.year= this.data.year;
      this.image = this.data.image
    }
  }

  @HostListener('window:keyup', ['$event'])
  /**
   * @param  {KeyboardEvent} event
   * @returns void
   * method to handle the keyboard event in order for the Escape key and Backspace key to close the dialog
   */
  keyEvent(event: KeyboardEvent) {    
    if(event.key == "Escape" || event.key== "Backspace"){
      this.dialogRef.close()
    }
  }
  
}
