var btnbottom=document.querySelector("#btn");
var inputText=document.querySelector("#input");
var outputText=document.querySelector("#output");
var outputText2=document.querySelector("#output2");

function clickHandler(year){

var array=inputText.value.split("-")
var year = array[2];
if(isNaN(year)){
  alert("Enter valid format dd-mm-yy")
}else{
      if(year % 4===0){
         if(year %100===0){
           if(year %400===0){
             outputText.innerText= "It is a leap year"
           }else{
             outputText.innerText= "It is not a leap year"
           }
          }else{
            outputText.innerText= "It is a leap year"
          }
      }else{
        outputText.innerText= "It is not a leap year"
      }
      }
    }
    
function clickHandler2(date){

  var array2=inputText.value.split("-")
  counter=0;
  var date = array2[0];


  if(isNaN(date)){
    alert("Enter valid format dd-mm-yy")
   }else{
    if(date==1){
    outputText2.innerText ="1 is neither prime nor composite number"
  }else{
    for(var i=2;i<date;i++)
    {
      if(date%i===0)
      {
        outputText2.innerText= "It is not a prime number"
        counter=counter+1;
        break;
      }
    }
    if(counter===0){
      outputText2.innerText= "It is a prime number"
    }
  }

  }
}

btnbottom.addEventListener("click",clickHandler)
btnbottom.addEventListener("click",clickHandler2)

