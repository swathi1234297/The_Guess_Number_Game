//defining some constant
const min=1,
max=10,
previousGuesses=[];

//defining  some variable
let secretNum=null,  //by default it is null
guessNum=null;  


const play=function(){
//set the secret number with random number
secretNum=Math.floor(Math.random()* (max-min+1)) +min; 

//creating loop
 while(guessNumber()!=secretNum) 
  {
    

    if(guessNum!=0){  
    
    render() ; 
    }
  }
  alert("Congrats.. The number was "+ secretNum +".Your previous guesses were "+previousGuesses)
 }
 
 //define guessNumber
 const guessNumber=function()
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
