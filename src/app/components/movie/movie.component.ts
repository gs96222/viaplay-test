import { Component, OnInit , HostListener, ViewChild,ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { ARROW_KEYS } from 'src/app/constants/constants';
import { MovieService } from 'src/app/services/movie.service';
import { UtilityService } from 'src/app/services/utility.service';
import { MovieCardsComponent } from '../movie-cards/movie-cards.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, AfterViewInit {
  @ViewChild('movieContainer') movieContainer: ElementRef<HTMLInputElement>;
  @ViewChildren('movies') movieCard: QueryList<MovieCardsComponent>;

  movies:any;
  currentIndex = 0;
  itemsPerRow: number;
  moviesListSize:number;
  constructor(private movieService: MovieService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    // fetching the movies list data from the API
    this.movieService.fetchMoviesList().subscribe((data:any[]) =>{
      this.movies = data
      this.moviesListSize = data.length;
    })
  }

  ngAfterViewInit() {
    const containerwidth  = this.movieContainer.nativeElement.offsetWidth; // storing the outer container width in order to calculate the no of cards in a row
    let intervalid = setInterval(() => {
      if(this.movieCard.first){
        const movieCardOffsetWidth = this.movieCard.first.offsetWidth
        this.itemsPerRow = this.utilityService.getItemsPerRow(containerwidth,movieCardOffsetWidth);
        clearInterval(intervalid)
      }
      
    },50)
  }

  @HostListener('window:keyup', ['$event'])
  /**
   * @param  {KeyboardEvent} event
   * @returns void
   * method to handle the keyboard event in order for the Arrows keys to work and navigate to the cards
   */
  keyEvent(event: KeyboardEvent) { 
    if(ARROW_KEYS.indexOf(event.key) != -1){
      this.currentIndex = this.utilityService.getNextSelectedIndex(event.key,this.moviesListSize,this.itemsPerRow,this.currentIndex)
        this.movieCard.toArray()[this.currentIndex].card.nativeElement.scrollIntoView()
    }
  }

  changeCurrentIndex(index){
    this.currentIndex = index;
  }

   

}
