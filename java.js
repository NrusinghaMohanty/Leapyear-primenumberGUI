var btnbottom=document.querySelector("#btn");
var inputText=document.querySelector("#input");
var outputText=document.querySelector("#output");

var array=inputText.value.split("-")

var year = array[2];
   
function clickHandler(year){
   
      if(year % 4==0){
         if(year %100==0){
           if(year %400==0){
             outputText.innerText= "is a leap year"
           }else{
             outputText.innerText= "is not a leap year"
           }
          }else{
            outputText.innerText= "is a leap year"
          }
      }else{
        outputText.innerText= "is not a leap year"
      }
      }
    


btnbottom.addEventListener("click",clickHandler)







































// var readlineSync=require("readline-sync")
// console.log("Enter your Birthday in this below format\n")

// var userquestion=readlineSync.question("dd-mm-yyyy ")

// array=userquestion.split("-")
// console.log("\nyour birth year is " + array[2])

// var year=array[2];



// if(isNaN(year)){
//   console.log("\nYour data is not valid")
// }else{
// if(year % 2==0){
//    if(year %100==0){
//      console.log("\nYour birth year isn't leap year")
//      if(year %400==0){
//        console.log("\nYour birth year is a leap year")
//      }else{
//        console.log("\nYour birth year isn't leap year")
//      }
//     }else{
//       console.log("\nYour birth year is a leap year")
//     }
// }else{
//   console.log("\Your birth year isn't leap year")
// }
// }