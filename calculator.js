let runningatotal=0;
let buffer="0";
let previousOperator=null;
const screen = document.querySelector(".screen");



document.querySelector(".calc-buttons").addEventListener("click",function(event){
buttonClick(event.target.innerText);
})


function buttonClick(value){

    if(isNaN(parseInt(value))){
        handlesymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}
function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }
 
    else{
    buffer += value;//append the value

}


}
function handlesymbol(value){

    switch(value){
        case "C":

        buffer=0;
        runningatotal=0;
        break;

        case "=":
            if(previousOperator===null){
                return;

            }
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer= " " + runningatotal;
            runningatotal=0;
            break;

        case "--":
        if(buffer.length ===1){
            buffer="0";
        }

        else{
            buffer=buffer.substring(0,buffer.length -1);
        }
        break;

        default:
            handleMath(value);
            break;


    }


}

function handleMath(value){
    const intBuffer = parseInt(buffer);

    if (runningatotal===0){
        runningatotal = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }

    previousOperator = value;
     
    buffer="0";
}

function flushOperation(intBuffer){

    if(previousOperator === '+'){
        runningatotal+=intBuffer;
    }
   else  if(previousOperator === '-'){
        runningatotal-=intBuffer;
    }
    else  if(previousOperator === 'X'){
        runningatotal*=intBuffer;
    }
    else{
        runningatotal/=intBuffer;
    }

}

function rerender(){
    screen.innerText  = buffer;
}


