// Machine id -->> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);

  return value;
}

// Machine--->> balance

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;

  console.log("Current Balance :", Number(balance));
  return Number(balance);
}

// machine-->> set balance

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

//  machine id ---->>> hide all section and only show given id section

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const transaction = document.getElementById("history");
  // const = document.getElementById

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transaction.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
