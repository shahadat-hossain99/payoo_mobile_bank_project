console.log("cashoutttttt");

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // 1. get th agent number and validate

  const cashoutNumberInput = document.getElementById("Cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log("cashoutNumber");
  if (cashoutNumber.length !== "11") {
    alert("Invalid Agent Number");
    return;
  }

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

  // 5. get the pin amd verify

  const cashoutPinInput = document.getElementById("cashout-pin");
  const pin = cashoutPinInput.value;
  console.log(pin);

  if (pin == "1234") {
    // 5.1 true ::> alert> set balance
    alert("cash-out Successful");
    console.log("New Balance ", newBalance);

    balanceElement.innerText = newBalance;
  } else {
    // 5.2 false ::> alert> return

    alert("Invalid pin number");
    return;
  }
});
