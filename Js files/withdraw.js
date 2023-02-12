// console.log('withdraw okay');
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdraw done');
const withdrawField = document.getElementById('cash-out');
const withdrawFieldType = withdrawField.value;
const placedWithdrawAmount = parseFloat(withdrawFieldType);

withdrawField.value = '';

if(isNaN(placedWithdrawAmount)){
    alert('Please, provide a valid number');
    return;
}

const totalWithdraw = document.getElementById('withdraw-amount');
const oldWithdrawAmountType = totalWithdraw.innerText;
const oldWithdrawAmount = parseFloat(oldWithdrawAmountType);


const savingsAmount = document.getElementById('total-savings');
const totalSavingType = savingsAmount.innerText;
const totalSavingAmount = parseFloat(totalSavingType);


if(placedWithdrawAmount > totalSavingAmount){
    alert ('you do not have enough credit');
    return;
}

const currentWithdrawAmount = placedWithdrawAmount + oldWithdrawAmount;
totalWithdraw.innerText = currentWithdrawAmount;

const currentSavingAmount = totalSavingAmount - currentWithdrawAmount;
savingsAmount.innerText = currentSavingAmount;

})