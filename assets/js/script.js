const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const forms = document.getElementById("section-forms");

btnLogin.addEventListener("click", () => {
  formLogin.style.display = "flex";
  formRegister.style.display = "none";
  btnLogin.classList.add("btn-active");
  btnLogin.classList.remove("btn-inactive");
  btnRegister.classList.add("btn-inactive");
  btnRegister.classList.remove("btn-active");
  forms.classList.add("margin-login");
});

btnRegister.addEventListener("click", () => {
  formLogin.style.display = "none";
  formRegister.style.display = "flex";
  btnRegister.classList.add("btn-active");
  btnRegister.classList.remove("btn-inactive");
  btnLogin.classList.add("btn-inactive");
  btnLogin.classList.remove("btn-active");
  forms.classList.remove("margin-login");
});