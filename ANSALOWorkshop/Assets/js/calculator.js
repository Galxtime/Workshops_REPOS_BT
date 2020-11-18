const inputLetter = document.getElementById('letter')
const inputNumber = document.getElementById('number')
const btnA1= document.getElementById('bttnA1');
const btnB2= document.getElementById('bttnB2');
const btnC3= document.getElementById('bttnC3');
const btnD4= document.getElementById('bttnD4');
const btnE5= document.getElementById('bttnE5');
const btnF6= document.getElementById('bttnF6');
const btnG7= document.getElementById('bttnG7');
const btnH8= document.getElementById('bttnH8');
const btnI9= document.getElementById('bttnI9');
const btnJ0= document.getElementById('bttnJ0');
const btnCL= document.getElementById('bttnClear');



bttnA1.onclick = function (){
 const keyText = inputLetter.innerText
 const keyNum = inputNumber.innerText
  if (lettersAreEmpty()) {
    inputLetter.innerHTML="A";
   
  } else {
     if(numbersAreEmpty()) {
         inputNumber.innerHTML= '1';
    } else {
         alert("Completa primero las letras")
    }
  }
   
      
}

bttnB2.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText

  if (keyNum === '1') {
    number.innerHTML = keyNum + '2'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega el número 1");
    }
  }
  if (keyText[keyText.length-1]=='A'){
    inputLetter.innerHTML=keyText + 'B'
  }else {
    if (keyText===""){
      alert("Agrega primero la letra A");
    }
  }
  
 

}
bttnC3.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText

  if(keyNum[keyNum.length-1]=='2'){
    number.innerHTML= keyNum + '3'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 2");
    }
  }
  if (keyText[keyText.length-1]=='B'){
    inputLetter.innerHTML=keyText + 'C'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra B");
    }
  }
    
}
bttnD4.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  
  if(keyNum[keyNum.length-1]=='3'){
    number.innerHTML= keyNum + '4'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 3");
    }
  }
  if (keyText[keyText.length-1]=='C'){
    inputLetter.innerHTML=keyText + 'D'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra C");
    }
  }
}

bttnE5.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  
  if(keyNum[keyNum.length-1]=='4'){
    number.innerHTML= keyNum + '5'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 4")
    }
  }
  if (keyText[keyText.length-1]=='D'){
    inputLetter.innerHTML=keyText + 'E'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra D");
    }
  }
}
bttnF6.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  
  if(keyNum[keyNum.length-1]=='5'){
    number.innerHTML= keyNum + '6'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 5")
    }
  }
  if (keyText[keyText.length-1]=='E'){
    inputLetter.innerHTML=keyText + 'F'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra E");
    }
  }
}
bttnG7.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  
  if(keyNum[keyNum.length-1]==6){
    number.innerHTML= keyNum + '7'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 6")
    }
  }
  if (keyText[keyText.length-1]=='F'){
    inputLetter.innerHTML=keyText + 'G'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra F");
    }
  }
}

bttnH8.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  
  if(keyNum[keyNum.length-1]=='7'){
    number.innerHTML= keyNum + '8'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 7")
    }
  }
  if (keyText[keyText.length-1]=='G'){
    inputLetter.innerHTML=keyText + 'H'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra G");
    }
  }
}
bttnI9.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  
  if(keyNum[keyNum.length-1]=='8'){
    number.innerHTML= keyNum + '9'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 8")
    }
  }
  if (keyText[keyText.length-1]=='H'){
    inputLetter.innerHTML=keyText + 'I'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra H");
    }
  }
}
bttnJ0.onclick = function (){
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  
  if(keyNum[keyNum.length-1]=='9'){
    number.innerHTML= keyNum + '0'
  } else {
    if (keyNum === "" && keyText[keyText.length - 1] === 'J') {
      alert("Agrega primero  el número 9")
    }
  }
  if (keyText[keyText.length-1]=='I'){
    inputLetter.innerHTML=keyText + 'J'
  }else {
    if (keyNum===""){
      alert("Agrega primero la letra I");
    }
  }
}

bttnClear.onclick= function () {
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
      number.innerHTML="";
			inputLetter.innerHTML="";
}

function lettersAreEmpty() {
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText

  if (keyText==='') {
    return true;
  } else {
    return false;
  }
}



function numbersAreEmpty() {
  const keyText = inputLetter.innerText
  const keyNum = inputNumber.innerText
  

 if (keyText[keyText.length-1]=="J") {
   return true;
 } else {
   return false;
 }
} 


