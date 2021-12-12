import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MovieViewComponent } from '../movie-view/movie-view.component';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent implements OnInit, AfterViewInit {
  @ViewChild('card') card: ElementRef<HTMLInputElement>; // reference to the outer div container of the card
  @Input() imageUrl: string;
  @Input() name: string;
  @Input() year: string;
  @Input() currentIndex: number;
  @Input() index: number;
  dialogRef: MatDialogRef<MovieViewComponent>;
  offsetWidth: number;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
  
   // getting the offset of the card inorder to calculate the items accomodate in the row
    this.offsetWidth = this.card.nativeElement.offsetWidth;
  }

  
  /**
   * method to open the image diablog which shows the image of the movie selected
   */
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '85%';
    dialogConfig.data = {
      image: this.imageUrl,
      name: this.name,
      year: this.year,
    };
    this.dialogRef = this.dialog.open(MovieViewComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(() => {
      this.dialogRef = null;
    });
  }

  
  @HostListener('window:keyup', ['$event'])
  /**
   * @param  {KeyboardEvent} event
   * @returns void
   * method to handle the keyboard event in order for the Enter key to open the dialog
   */
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.index === this.currentIndex) {
      if (!this.dialogRef) this.openDialog();
    }
  }
}
