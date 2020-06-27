function getNumber(num){
    var number = document.getElementById("Number");
    number.value += num;
}


function clearScreen(){
    var number = document.getElementById("Number");
    number.value = "";
}

function ans() {
    var number = document.getElementById("Number");
    number.value = eval(number.value);
}

function power() {
    var number = document.getElementById("Number").value;
    document.getElementById("Number").value=Math.pow(number,2);
   }

function square() {
    var number = document.getElementById("Number").value;
    document.getElementById("Number").value=Math.sqrt(number);
}

function factorial() 
{ 
  var i, no, fact;
  fact=1;
  no=Number(document.getElementById("Number").value);
  for(i=1; i<=no; i++)  
 {
   fact= fact*i;
 }  
  document.getElementById("Number").value= fact;
}



