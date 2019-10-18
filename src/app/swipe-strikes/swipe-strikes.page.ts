
import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-swipe-strikes',
  templateUrl: './swipe-strikes.page.html',
  styleUrls: ['./swipe-strikes.page.scss'],
})
export class SwipeStrikesPage  {

  @ViewChild('myswing1', {static: false}) swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
 
  cards: Array<any>;
  stackConfig: StackConfig;
  userEmail: string;
  strikes: any[];

  constructor(public af: AngularFireDatabase, private authService: AuthenticateService, private navCtrl: NavController) {

  af.list('/strikes').valueChanges()
    .subscribe(result => {
      this.strikes = result;
      console.log(this.strikes);
  });



    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    }
 
    this.cards = [
      { name: 'clubs', symbol: '♣',img:"https://image.ibb.co/epvM7n/Art_and_culture.png",title: 'Test1', description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.' },
      { name: 'diamonds', symbol: '♦',img:"https://image.ibb.co/jY88nn/city_breaks.png",title: 'Test2' },
      { name: 'spades', symbol: '♠',img:"https://image.ibb.co/fXPg7n/Beach_and_Chill.png",title: 'Test3' }
    ];
  }
 
  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function
 
    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards
 
    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);
 
    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));
 
    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));
 
    this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));
 
    this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  }
 
  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }
   
  


  


  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }




}
