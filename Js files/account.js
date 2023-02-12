// console.log('connection confirmed');
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit submitted');
    const depositField = document.getElementById('cash-in');
    const placedAmount = depositField.value;
    const placedAmountType = parseFloat(placedAmount);
    // console.log(typeof placedAmountType);
    // console.log(placedAmount);


    const depositElement = document.getElementById('deposit-amount');
    const currentDeposit = depositElement.innerText;
    const currentDepositType = parseFloat(currentDeposit);

    const totalDeposit = placedAmountType + currentDepositType;

    depositElement.innerText = totalDeposit;

    // adding total savings amount
    const savingsAmount = document.getElementById('total-savings');
    const oldSavingType = savingsAmount.innerText;
    const oldSavingAmount = parseFloat(oldSavingType);

    const currentSaving = totalDeposit + oldSavingAmount;

    savingsAmount.innerText = currentSaving;



    depositField.value= '';
})