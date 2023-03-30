const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const mailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

form.addEventListener("submit", (event) => {
  if (valid()) {
    event.preventDefault();
  }
});
function valid() {
  const emailValue = email.value;
  const validEmail = mailRegex.test(emailValue);
  if (validEmail == true) {
    error.classList.remove("error-function");
    return false;
  } else if (validEmail == false) {
    error.classList.add("error-function");
    return true;
  }
}
