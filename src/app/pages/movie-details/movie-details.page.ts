import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveieService } from 'src/app/services/moveie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
   styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoveieService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.movieService.getDetails(id).subscribe( result => {
      console.log("detail;s: ", result);
      this.information = result;
    })

  }

  openWebSite() {
    window.open(this.information.Website, '_blank');
  }

}
