import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private readonly api: MovieService) { }

  public page: number;
  public pages: number;
  public pageData: any = {};
  public imageApi: string;

  ngOnInit() {
    this.page = 1;
    this.imageApi = environment.imageApi;
    this.api.movieList(1, this.page)
      .subscribe(data => {
        this.pageData = data;
      });
  }
}
