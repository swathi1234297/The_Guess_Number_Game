//defining some constant
const min=1,
max=10,
previousGuesses=[];//constant..it is empty bcz user guesses inside this array

//defining  some variable
let secretNum=null,  //by default it is null
guessNum=null;  //by default 

//define function using while and if
const play=function(){
//set the secret number with random number
secretNum=Math.floor(Math.random()* (max-min+1)) +min; //random is a floating point number between 1 and 0,so multifly by max-min+1...using floor make it a integer numbr

//creating loop
 while(guessNumber()!=secretNum) 
  {
    //call another function which is guessNum then compare

    if(guessNum!=0){  //if it is valid call render function
    
    render() ; 
    }
  }
  alert("Congrats.. The number was "+ secretNum +".Your previous guesses were "+previousGuesses)
 }
 
 //define guessNumber
 const guessNumber=function()//bcz easy to compare this code to an object
 {
guessNum=prompt("Enter a number between" + min + "and" + max);//get a number from user
return guessNum;
 }

 //define render function
 const render=function(){
     previousGuesses.push(guessNum);
     if(guessNum>secretNum)
     {
     alert("Too high");
 }
 else{
     alert("Too low");
 }
 }
