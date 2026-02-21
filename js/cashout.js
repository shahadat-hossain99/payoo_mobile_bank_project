document.getElementById("withdraw-btn").addEventListener("click", function () {
  // 1. get th agent number and validate

  const agentNumber = getValueFromInput("Cashout-number");
  if (agentNumber.length !== 11) {
    alert("invalid number!!!");
    return;
  }
  console.log(agentNumber);

  // 2. get the amount,validate, convert to number

  const amount = getValueFromInput("cashout-amount");
  console.log(amount);

  // 3. get the current balance,validate,convert to number

  const currentBalance = getBalance();

  // 4. calculate new balance
  const newBalance = currentBalance - Number(amount);
  if (newBalance < 0) {
    alert("invalid Amount");
    return;
  }

  // 5. get the pin amd verify

  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    // 5.1 true ::> alert> set balance
    alert("cash-out Successful");
    console.log("New Balance :", newBalance);

    setBalance(newBalance);
  } else {
    // 5.2 false ::> alert> return
    alert("Invalid pin");
    return;
  }
});

// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   // 1. get th agent number and validate
//   const agentNumberInput = document.getElementById("Cashout-number");
//   const agentNumber = agentNumberInput.value;
//   console.log(agentNumber);
//   if (agentNumber.length !== 11) {
//     alert("Invalid Number");
//     return;
//   }

//   // 2. get the amount,validate, convert to number
//   const amountInput = document.getElementById("cashout-amount");
//   const amount = amountInput.value;
//   console.log(amount);

//   // 3. get the current balance,validate,convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;

//   // 4. calculate new balance
//   const newBalance = Number(balance) - Number(amount);
//   if (newBalance < 0) {
//     alert("invalid Amount");
//     return;
//   }

//   // 5. get the pin amd verify

//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin == "1234") {
//     // 5.1 true ::> alert> set balance
//     alert("CashOut Successful");
//     console.log("New Balance :", newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     // 5.2 false ::> alert> return
//     alert("Invalid pin");
//     return;
//   }
// });
