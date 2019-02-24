import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  author = 'Solcan Moise-Daniel';
  date = '24.02.2019';
  version = '1.0.0';

  number = "";
  firstNum = 0;
  secondNum = 0;
  viewResult = "";

 append(number){
    this.number += number;
    this.viewResult = this.number;
  }

  reset(){
    this.number = "";
    this.firstNum = 0;
    this.secondNum = 0;
    this.viewResult = "";
  }

  adding(){
    if(!isNaN(parseInt(this.number))){
      this.firstNum = parseInt(this.number);
      this.secondNum += this.firstNum;
      this.viewResult = this.secondNum;
      this.firstNum = 0;
      this.number = "";
    }
    this.logging();
  }

  substract(){
    if(!isNaN(parseInt(this.number))){
      this.firstNum = parseInt(this.number);
      if(this.secondNum == 0){
        this.secondNum = this.firstNum - this.secondNum;
      }else{
        this.secondNum = this.secondNum - this.firstNum;
      }
      this.viewResult = this.secondNum;
      this.firstNum = 0;
      this.number = "";
    }
    this.logging();
  }
  //// TODO: verify this method when a number is 0 and change logic
  multiply(){
    if(!isNaN(parseInt(this.number))){
      this.firstNum = parseInt(this.number);
      if(this.secondNum == 0){
        this.secondNum =1;
      }
      this.secondNum = this.firstNum * this.secondNum;
      this.viewResult = this.secondNum;
      this.firstNum = 0;
      this.number = "";
    }
    this.logging();
  }

  divide(){
    if(!isNaN(parseInt(this.number))){
      this.firstNum = parseInt(this.number);
      if(this.secondNum == 0){
        this.secondNum =1;
        this.secondNum = this.firstNum / this.secondNum;
      }else{
        this.secondNum = this.secondNum / this.firstNum;
      }
      this.viewResult = this.secondNum;
      this.firstNum = 0;
      this.number = "";
    }
    this.logging();
  }

  
  //// TODO: implement equals() method

  logging(){
    console.log(this.firstNum);
    console.log(this.secondNum);
  }

  equals(){
    this.viewResult = this.secondNum;
  }

}
