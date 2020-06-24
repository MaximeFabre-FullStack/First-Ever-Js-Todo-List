/* 
 Let create a todo list only using html css javascript 
*/

// Button delete list
const ajout_button_del = document.createElement("button");
ajout_button_del.classList.add("del");
ajout_button_del.innerText = "Delete";

// Button done list
const ajout_button_mod = document.createElement("button");
ajout_button_mod.classList.add("mod");
ajout_button_mod.innerText = "Done";

// Button edit list
const ajout_button_edit = document.createElement("button");
ajout_button_edit.classList.add("edit");
ajout_button_edit.innerText = "Edit";

// lists input
const input_task = document.createElement("input");
input_task.classList.add("list-input");

/* ----------------------------------------------------------------*/

// Function value
function value(e) {
  let windowWith = e.view.innerWidth;

  const input = document.querySelector("#input");

  // input task parametres
  input_task.disabled = true;
  input_task.value = input.value;

  // Appending childs
  const liste = document.querySelector("#list");

  /* ---------------------------------*/

  if (input.value != "" && windowWith >= 1200) {
    const task = document.createElement("li");
    task.classList.add("li");

    liste.appendChild(task); // create a new "li" in the todo "ul"

    // append to the "li"
    task.appendChild(input_task);
    task.appendChild(ajout_button_del);
    task.appendChild(ajout_button_mod);
    task.appendChild(ajout_button_edit);

    // when clicking delete button
    ajout_button_del.addEventListener("click", function (e) {
      console.log(e);
      task.remove();
    });

    // when clicking done button
    ajout_button_mod.addEventListener("click", function (e) {
      const liste_ok = document.querySelector("#list2");
      liste_ok.appendChild(task);
      ajout_button_mod.remove();
    });

    // when clicking edit button
    ajout_button_edit.addEventListener("click", function (e) {
      console.log(e);
      input_task.disabled = false;
    });

    /* ---------------------------------*/
  } else if (input.value != "" && windowWith <= 1200) {
    // if window <= 1200px create a div with the buttons inside

    /* ---------------------------------*/

    const task = document.createElement("li");
    task.classList.add("li");

    const div_button = document.createElement("div");
    div_button.classList.add("div_button");
    div_button.appendChild(ajout_button_del);
    div_button.appendChild(ajout_button_edit);
    div_button.appendChild(ajout_button_mod);

    liste.appendChild(task); // create a new "li" in the todo "ul"

    // append to the "li"
    task.appendChild(input_task);
    task.appendChild(div_button);

    // when clicking delete button
    ajout_button_del.addEventListener("click", function (e) {
      console.log(e);
      task.remove();
    });

    // when clicking done button
    ajout_button_mod.addEventListener("click", function (e) {
      const liste_ok = document.querySelector("#list2");
      liste_ok.appendChild(task);
      ajout_button_mod.remove();
    });

    // when clicking edit button
    ajout_button_edit.addEventListener("click", function (e) {
      console.log(e);
      input_task.disabled = false;
    });

    /* ---------------------------------*/
  } else {
    // if input = "" display the alert
    alert("Oups, it seems that the input is empty!");
  }
}

/* ----------------------------------------------------------------*/

// calling the value function "onclick"
const button = document.querySelector(".ajout");
button.addEventListener("click", value);
