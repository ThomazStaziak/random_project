const inputs = document.querySelectorAll(
  "input[type=text], input[type=email], input[type=password]"
);
const email = document.querySelector("#email");
const optIn = document.querySelector("input[type=checkbox]");
const selects = document.querySelectorAll("select");
const button = document.querySelector("button[type=submit]");
const form = document.querySelector("form");

inputs.forEach(
  input =>
    (input.onblur = () => {
      if (input.value === "") {
        input.classList.add("border-danger");
        input.nextElementSibling.innerHTML =
          '<span class="text-danger">O campo não pode ser vazio</span>';
      } else if (
        input.getAttribute("id") === "cpf" &&
        !validaCPF(input.value.replace(/\D/g, ""))
      ) {
        input.classList.add("border-danger");
        input.nextElementSibling.innerHTML =
          '<span class="text-danger">O CPF precisa ser um CPF válido</span>';
      } else {
        if (input.classList.value.includes("border-danger"))
          input.classList.replace("border-danger", "border-success");
        else input.classList.add("border-success");
        input.nextElementSibling.innerHTML = "";
      }
    })
);

selects.forEach(select => {
  select.onchange = () => {
    if (select.selectedIndex > 0) {
      select.classList.add("border-success");
    } else {
      select.classList.add("border-danger");
    }
  };
});

optIn.onchange = () => {
  if (optIn.checked) {
    button.style.cssText =
      "cursor: pointer; background-color: #cd381c; border-radius: 5px; color: #fff; font-weight: bold; border: none";
    button.removeAttribute("disabled");
  } else {
    button.style.cssText =
      "cursor: pointer; background-color: #cd381c99; border-radius: 5px; color: #fff; font-weight: bold; border: none";
    button.setAttribute("disabled", "");
  }
};

email.oncopy = evt => {
  evt.preventDefault();
  console.log(email.value);
};
