console.log("cashoutttttt");

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // 1. get th agent number and validate

  const cashoutNumberInput = document.getElementById("Cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log("cashoutNumber");

  // 2. get the amount,validate, convert to number
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;

  // 3. get the current balance,validate,convert to number
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("ohhhh");

  // 4. calculate new balance

  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");

    return;
  }
  console.log("New Balance ", newBalance);
  // 5. get the pin amd verify
  // 5.1 true ::> alert> set balance
  // 5.2 false ::> alert> return
});
