console.log("JS file connected");

document.getElementById("login-btn").addEventListener("click", function () {
  console.log("btn clicked");

  //!1--   get the mobile number
  const inputNumber = document.getElementById("input-mobile");
  const mobileNumber = inputNumber.value;
  console.log(mobileNumber);

  //!2--   get the pin input
  const inputPin = document.getElementById("input-pin");
  const pinNumber = inputPin.value;
  console.log(pinNumber);

  //!3--   match the pin and mobile input
  if (mobileNumber == "01533764047" && pinNumber == "1234") {
    //? 3.1-- true:::>> alert> homepage
    alert("Login Successful");

    // window.location.replace("/home.html");
    window.location.assign("/home.html");
  } else {
    //? 3.2-- false::>> alert> return
    alert("Login Failed");
    return;
  }
});
