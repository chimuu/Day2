import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-my-jokes',
  templateUrl: './my-jokes.component.html',
  styleUrls: ['./my-jokes.component.css']
})
export class MyJokesComponent implements OnInit {

  constructor(private jokesService: JokesService) { }

  joke = 'I do not have a joke yet';
  loading = true;

  ngOnInit() {

   
  }


  getAJoke() {


    this.loading =true;
    this.jokesService.getJokes().subscribe(data => 
      {
        this.loading =false;
        this.joke = data.value;
      });

  }

}
