const inputs = document.querySelectorAll("input");
const selects = document.querySelectorAll("select");

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
