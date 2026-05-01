function tipPercentageCal (tipNumber){
     return tipNumber / 100;
}
    const billAmount = document.querySelector('#bill-amount');
    const tipPercentage = document.querySelector('#tip-percentage');
    
let total;

function calculate (){
    const billNumber = parseFloat(billAmount.value);
    const tipNumber = parseFloat(tipPercentage.value);

    if(isNaN(billNumber) || isNaN(tipNumber)){
        return total = '';
    }else{
        const tipCal = tipPercentageCal(tipNumber);
        total = billNumber +(billNumber * tipCal);
    }
}
const calculateButton = document.querySelector('#calculate');

calculateButton.addEventListener('click' , ()=>{
    calculate();
    document.querySelector('#total-result').innerHTML=`${total.toFixed(2)}`;
});





