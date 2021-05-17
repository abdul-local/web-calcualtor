const calaculator ={
    displayNumber:'0',
    operator:null,
    firstNumber:null,
    waitingForSecondNumber:false

};

// mengupdate tampilan pada calculator
function updateDisplay(){
    document.querySelector('#displayNumber').innerText=calaculator.displayNumber;

}

// fungsi untuk clear/delet calculator
function clearCalacuator() {

    calaculator.displayNumber='0';
    calaculator.operator=null;
    calaculator.firstName=null;
    calaculator.waitingForSecondNumber=false;
}

// buat fungsi untuk memasukan angka kedalam calculator 
function inputDigit(input){
    if (calaculator.displayNumber==='0'){
        calaculator.displayNumber=input
    }else {
        calaculator.displayNumber += input

    }
    
}
function inversNumber() {
    if (calaculator.displayNumber==='0'){
        return ;
    }
    calaculator.displayNumber *=-1;
    

}

function performCalcualtion() {
    if (calaculator.firstNumber==null||calaculator.operator==null){
        alert('anda belum menetapkan operator');
        return ;
    }
    let result=0;

    if(calaculator.operator ==='+'){

        result= (parseInt(calaculator.firstNumber))+ (parseInt(calaculator.displayNumber));

    }else {
        result= (parseInt(calaculator.firstNumber)) - (parseInt(calaculator.displayNumber));

    }
    
    // object yang akan dikirimkan sebagai argument fungsi putHistory
    const history={
        firstNumber:calaculator.firstNumber,
        secondNumber:calaculator.displayNumber,
        operator:calaculator.operator,
        result:result
    }
    putHistory(history);

   calaculator.displayNumber=result;
   renderHistory();


    
}
function handleOperator(operator) {

    if(!calaculator.waitingForSecondNumber){
        calaculator.operator=operator;
        calaculator.waitingForSecondNumber=true;
        calaculator.firstNumber=calaculator.displayNumber;

        calaculator.displayNumber='0';

    }else {
        alert('operator sudah diterapkan');
    }
    
}


const buttons=document.querySelectorAll('.button');

for (const button of buttons) {

    button.addEventListener('click', function(event){
        const target=event.target;
        if (target.classList.contains('clear')){
            clearCalacuator()
            updateDisplay()
            return ;
        }
        if (target.classList.contains('equals')){
            performCalcualtion()
            updateDisplay()
            return ;
        }
        if (target.classList.contains('negative')){
            inversNumber()
            updateDisplay()
            return ;
        }
        if (target.classList.contains('operator')){
           handleOperator(target.innerText)
            return ;
        }

        inputDigit(target.innerText);
        updateDisplay();
    })

    
}