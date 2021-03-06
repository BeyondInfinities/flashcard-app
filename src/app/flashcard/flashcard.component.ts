import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as p5 from 'p5';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})

export class FlashcardComponent implements OnInit {

  id: number;
  front: string;
  back: string;
  display: string;
  bcolor: number;
  canvas: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    //Picking up the flashcard identifier from URL
    this.route.queryParams.subscribe(params => {
      this.id = params['number'];
    });
    
    // Backend call for getting the flash card context
    // Can create a form soon to get it going

   /*
      this.flashcardService.getCard( query: number)
      .subscribe((data: Card) => this.Card = {
        this.front: data['front'],
        this.back:  data['back']
    });
    }
    */    

    //Setting up the card using canvas
    const flashcard = (f) => {
      f.setup = () => {
        let canvas2 = f.createCanvas(f.windowWidth* 0.9, f.windowHeight * 0.9);
        canvas2.parent('sketch-holder');
        
        f.background(255);
        f.rect(0, 0, f.width, f.height);

        this.display = this.front;
      };

      let bcolor = 0;
      
      //To click and flip the card
      f.mousePressed = () => {
        if (this.front == this.display){
          this.display = this.back;
          this.bcolor = 0;
        }
        else{
          this.display = this.front;
          this.bcolor = 255;
        }
      };
      
      this.canvas = new p5(flashcard);
    }
  }


  

}
