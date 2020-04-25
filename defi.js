function value() {
  //  var
  let input = document.querySelector("#input");
  let liste = document.querySelector("#list");
  let liste_ok = document.querySelector("#list2");
  let task = document.createElement("li");
  let ajout_button_del = document.createElement("button");
  let ajout_button_mod = document.createElement("button");
  let ajout_button_edit = document.createElement("button");
  let input_task = document.createElement("input");

  // textesboutons
  ajout_button_del.innerText = "Supprimer";
  ajout_button_mod.innerText = "Fait √";
  ajout_button_edit.innerText = "Edit";

  // input task parametres
  input_task.disabled = true;
  input_task.value = input.value;

  // Creation des enfants
  liste.appendChild(task);
  task.appendChild(input_task);

  task.appendChild(ajout_button_del);
  task.appendChild(ajout_button_mod);
  task.appendChild(ajout_button_edit);

  // quand on appuie sur supprimer
  ajout_button_del.addEventListener("click", function (e) {
    console.log(e);
    task.remove();
  });
  // quand on appuie sur fait
  ajout_button_mod.addEventListener("click", function (e) {
    console.log(e);
    liste_ok.appendChild(task);
    ajout_button_mod.remove();
  });
  //   quand on appuie sur edit
  ajout_button_edit.addEventListener("click", function (e) {
    console.log(e);
    input_task.disabled = false;
  });
  input_task.disabled = true;
}

var button = document.querySelector(".button");
button.addEventListener("click", value);
