// handle deposit event
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValue = depositTotal.innerText;
    const newDepositTotal = parseFloat(depositTotalValue) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;
});

// handle withdraw event
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const totalWithdraw = parseFloat(withdrawInputValue) + parseFloat(withdrawTotalText);
    withdrawTotal.innerText = totalWithdraw;
    withdrawInput.value = '';

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    newBalanceTotal = parseFloat(balanceTotalText) - parseFloat(withdrawInputValue);
    balanceTotal.innerText = newBalanceTotal;
});