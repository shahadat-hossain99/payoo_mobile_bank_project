//

document.getElementById("add-money-btn").addEventListener("click", function () {
  // bank account validation

  const selectBank = getValueFromInput("bank-name");
  if (selectBank == "Select Bank") {
    alert("!! Please select a bank");
    return;
  }

  // get Bank account number and validate
  const bankAccount = getValueFromInput("account-number");
  console.log(bankAccount);
  if (bankAccount.length !== 11) {
    alert("Wrong Account Number");

    return;
  }

  //   get add amount and calculate new balance
  const amountToAdd = getValueFromInput("add-money-amount");
  console.log(amountToAdd);

  //   current balance

  const currentBalance = getBalance();

  // calculate balance

  const newBalance = currentBalance + Number(amountToAdd);

  //   pin verify

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Money Added Successfully from acc:${bankAccount}
        at ${new Date()}`);
    console.log("New Balance :", newBalance);

    setBalance(Number(newBalance));
  } else {
    alert("Invalid pin");
    return;
  }
});
