import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';
  lenght=0;
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  password ='';

  onChangeLenght(value:string){
    const parsedvalue = parseInt(value);

    if(!isNaN(parsedvalue)) {
      this.lenght=parsedvalue;
     
    }
    
  }

  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers =!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }

  onButtonCLick(){
   const letters ='abcdefghijklmnopqrstuvwxyz'
   const number ='1234567890'
   const symbols ='!@#$%^&*()'
  let validcheck='';
if(this.includeLetters){
  validcheck += letters ;

}  if(this.includeNumbers){
  validcheck += number;
}
if(this.includeSymbols){
  validcheck += symbols
}
let generatedPassword='';
for (let i=0; i < this.lenght; i++){
  const index =Math.floor(Math.random() * validcheck.length);
  generatedPassword += validcheck[index];
}
this.password=generatedPassword;
console.log(generatedPassword)
}


}
