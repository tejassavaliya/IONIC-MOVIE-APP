import { Component, OnInit } from '@angular/core';
import { SearchType, MoveieService } from 'src/app/services/moveie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MoveieService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData( this.searchTerm, this.type )
    // this.results.subscribe( (res) => {
    //   console.log("Response ", res);
    //   this.results = res;
    // });
    
  }
}
