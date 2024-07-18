const form = document.getElementById("form");
const user = document.getElementById("names");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confpass = document.getElementById("confpassword");

form.addEventListener("submit", (eve) => {
  eve.preventDefault();
  checkinput();
});

function checkinput() {
  const userval = user.value.trim();
  const emailval = email.value.trim();
  const passval = password.value.trim();
  const confpassval = confpass.value.trim();

  if (userval === "") {
    setError(user, "Username cannot be Blank");
  } else {
    setsuccess(user);
  }

  if (emailval === "") {
    setError(email, "Email cannot be Blank");
  } else if (!isEmail(emailval)) {
    setError(email, "Not a valid Email");
  } else {
    setsuccess(email);
  }

  function isEmail(email) {
    return function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  }

  if (passval === "") {
    setError(password, "Password cannot be Blank");
  } else {
    setsuccess(password);
  }

  if (confpassval === "") {
    setError(confpass, "confirm password cannot be Blank");
  } else if (passval !== confpassval) {
    setError(confpass, "confirm password should be same");
  } else {
    setsuccess(confpass);
  }

  function setError(element, message) {
    const formcontrol = element.parentElement;
    const small = formcontrol.querySelector("small");
    // formcontrol.className = "form-control error";
    formcontrol.classList.add("error");
    formcontrol.classList.remove("success");

    small.innerText = message;
  }

  function setsuccess(element) {
    const formcontrol = element.parentElement;
    // formcontrol.className = "form-control success";
    formcontrol.classList.add("success");
    formcontrol.classList.remove("remove");
  }

  // function isEmail(email) {
  //   if (
  //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)
  //   ) {
  //     return true;
  //   }
  //   alert("You have entered an invalid email address!");
  //   return false;
  // }
}
