let tableauClasse = [
  "Nico",
  "Denis",
  "Arthur",
  "Morgan",
  "Nathan",
  "Alexandre",
  "Dorian",
  "Cyril",
  "Abdel",
  "Julien",
  "Françoise",
  "Fred",
  "Louis",
];

for (let i = 0; i < 13; i++) {
  console.log(tableauClasse[i]);
}

let sexeType = [
  "Masc",
  "Masc",
  "Masc",
  "Masc",
  "Masc",
  "Masc",
  "Masc",
  "Masc",
  "Masc",
  "Masc",
  "Fem",
  "Masc",
  "Masc",
];
for (let i = 0; i < 13; i++) {
  console.log(sexeType[i]);
}

let tableauBody = document.getElementById("maTable");

for (let i = 0; i < tableauClasse.length; i++) {
  let row = document.createElement("tr");
  row.setAttribute("id", "row" + i);
  row.setAttribute("class", "row");

  //

  let nomCell = document.createElement("td");
  nomCell.setAttribute("id", "nomCell" + i);
  nomCell.textContent = tableauClasse[i];
  row.appendChild(nomCell);

  let sexeCell = document.createElement("td");
  sexeCell.setAttribute("id", "sexeCell" + i);
  sexeCell.textContent = sexeType[i];
  row.appendChild(sexeCell);

  let checkboxCell = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  checkboxCell.appendChild(checkbox);
  row.appendChild(checkboxCell);

  let btnSupprime = document.createElement("button");
  btnSupprime.textContent = "Supprimer";
  btnSupprime.setAttribute("id", "btn", +i);
  row.appendChild(btnSupprime);

  tableauBody.appendChild(row);

  btnSupprime.onclick = function () {
    //
    row.remove();
  };

  let btnInverse = document.createElement("button");
  btnInverse.textContent = "Inverser";
  btnInverse.setAttribute("id", "btn", +i);
  row.appendChild(btnInverse);

  tableauBody.appendChild(row);

  btnInverse.onclick = function () {
    console.log(nomCell);
    let inverse = nomCell.textContent;
    nomCell.textContent = sexeCell.textContent;
    sexeCell.textContent = inverse;
  };
}

let btnSupprimerSelection = document.createElement("button");
btnSupprimerSelection.textContent = "Supprimer la sélection";
btnSupprimerSelection.id = "btnSupprimerSelection";
tableauBody.parentNode.insertBefore(btnSupprimerSelection, tableauBody);

btnSupprimerSelection.onclick = function () {
  let checkboxes = document.getElementsByClassName("checkbox");
  let checkboxesSelected = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxesSelected.push(checkboxes[i]);
    }
  }

  for (let i = 0; i < checkboxesSelected.length; i++) {
    let row = checkboxesSelected[i].parentNode.parentNode;
    row.remove();
  }
};

function ajouterLigne() {
  let table = document.getElementById("maTable");
  let inputColonne1 = document.getElementById("inputColonne1").value;
  let inputColonne2 = document.getElementById("inputColonne2").value;

  let rowCount = table.rows.length;

  let cell1 = row.insertCell(0);
  cell1.setAttribute("id", "nomCell" + rowCount);
  cell1.textContent = inputColonne1;

  let cell2 = row.insertCell(1);
  cell2.setAttribute("id", "sexeCell" + rowCount);
  cell2.textContent = inputColonne2;

  let checkboxCell = row.insertCell(2);
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  checkboxCell.appendChild(checkbox);

  let btnSupprime = document.createElement("button");
  btnSupprime.textContent = "Supprimer";
  btnSupprime.setAttribute("class", "btnSupprime");
  row.appendChild(btnSupprime);

  let btnInverse = document.createElement("button");
  btnInverse.textContent = "Inverser";
  btnInverse.setAttribute("class", "btnInverse");
  row.appendChild(btnInverse);

  btnSupprime.onclick = function () {
    row.remove();
  };

  btnInverse.onclick = function () {
    let sexeCell = document.getElementById("sexeCell" + rowCount);
    let nomCell = document.getElementById("nomCell" + rowCount);

    let inverse = nomCell.textContent;
    nomCell.textContent = sexeCell.textContent;
    sexeCell.textContent = inverse;
  };

  let textareaCell = row.insertCell(3);
  textareaCell.setAttribute("colspan", "2");
  let textarea = document.createElement("textarea");
  textarea.setAttribute("cols", "40");
  textarea.setAttribute("class", "inputTextarea");
  textareaCell.appendChild(textarea);

  let btnValider = document.createElement("button");
  btnValider.textContent = "Valider";
  btnValider.setAttribute("class", "btnValider");
  btnValider.addEventListener("click", function () {
    let value = textarea.value;
    let newRow = table.insertRow(table.rows.length - 1);
    newRow.setAttribute("class", "row");

    let nomCell = newRow.insertCell(0);
    nomCell.textContent = value;

    let sexeCell = newRow.insertCell(1);
    sexeCell.textContent = "";

    let checkboxCell = newRow.insertCell(2);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkboxCell.appendChild(checkbox);

    let btnSupprime = document.createElement("button");
    btnSupprime.textContent = "Supprimer";
    btnSupprime.setAttribute("class", "btnSupprime");
    newRow.appendChild(btnSupprime);

    btnSupprime.onclick = function () {
      newRow.remove();
    };

    let btnInverse = document.createElement("button");
    btnInverse.textContent = "Inverser";
    btnInverse.setAttribute("class", "btnInverse");
    newRow.appendChild(btnInverse);

    btnInverse.addEventListener("click", function () {
      let inverse = nomCell.textContent;
      nomCell.textContent = sexeCell.textContent;
      sexeCell.textContent = inverse;
    });

    // textarea.value = "";
  });
}

let table = document.getElementById("maTable");
let row = table.insertRow();
let cell = row.insertCell();
// let textarea = document.createElement("textarea");

textarea.cols = 40;

cell.appendChild(textarea);

function envoyerTexte() {
  // Récupérer la valeur de la zone de texte
  let texte = document.getElementById("myTextarea").value;

  // Placer le texte dans l'élément cible
  let emplacement = document.getElementById("emplacementTexte");
  emplacement.textContent = texte;
}
