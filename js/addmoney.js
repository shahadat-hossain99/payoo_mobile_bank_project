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
    alert(` Money Added Successfully from 
        ${selectBank}
        ,acc no: ${bankAccount} at ${new Date()}`);
    console.log("New Balance :", newBalance);

    setBalance(newBalance);

    // 1--- histor-container ke dhore nia asbo
    const history = document.getElementById("history-container");
    // 2--- new div create korbo
    const newHistory = document.createElement("div");
    // 3--- new div aa .innerHtml add korbo

    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 rounded-xl">
     

      <div class="flex justify-between items-center">
        <div>
            <p>Money Added: ${amountToAdd} tk</p>
            <p>Bank: ${selectBank}</p>
            <p>Account: ${bankAccount}</p>
        </div>
        <div class="dropdown border-none">
            <div tabindex="0" role="button"     class="btn m-1">
                <!-- SVG for 3 vertical dots (Kebab) goes here -->
                 <svg xmlns="http://www.w3.org" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
            </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                </ul>
            </div>
      </div>
     
    </div>
  `;

    history.appendChild(newHistory);

    // newHistory.innerHTML = `
    // <div
    // class="transaction-card p-5 bg-base-100"
    // >
    // <p> Money Added Successfully from ${selectBank}
    //     ,acc no : ${bankAccount} at ${new Date()}
    // </p>

    // </div>
    // `;
    // // 4--- new div append korbo

    // historys.append(newHistory);
  } else {
    alert("Invalid pin");
    return;
  }
});
