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

  let checkboxCell = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");
  checkboxCell.appendChild(checkbox);
  row.appendChild(checkboxCell);

  let nomCell = document.createElement("td");
  nomCell.setAttribute("id", "nomCell" + i);
  nomCell.textContent = tableauClasse[i];
  row.appendChild(nomCell);

  let sexeCell = document.createElement("td");
  sexeCell.setAttribute("id", "sexeCell" + i);
  sexeCell.textContent = sexeType[i];
  row.appendChild(sexeCell);

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

  let lastRow = table.lastChild;
  console.log(lastRow);

  let chaine = lastRow.id;
  console.log(chaine);

  let chaineRow = chaine.split("w");
  console.log(chaineRow);

  let idRow = parseInt(chaineRow[1]);
  console.log(idRow);

  let row = table.insertRow(-1);
  row.setAttribute("class", "row");
  row.setAttribute("id", "row" + (idRow + 1));

  //LA
  let nomCell = document.getElementById("nomCell" + (idRow + 1));
  let sexeCell = document.getElementById("sexeCell" + (idRow + 1));

  let cell1 = row.insertCell(0);
  cell1.setAttribute("id", "nomCell" + (idRow + 1));
  cell1.textContent = inputColonne1;

  let cell2 = row.insertCell(1);
  cell2.setAttribute("id", "nomCell2" + (idRow + 1));
  cell2.textContent = inputColonne2;

  let btnSupprime = document.createElement("button");
  btnSupprime.textContent = "Supprimer";
  btnSupprime.setAttribute("id", "btn");
  row.appendChild(btnSupprime);

  tableauBody.appendChild(row);

  btnSupprime.onclick = function () {
    row.remove();
  };

  let btnInverse = document.createElement("button");
  btnInverse.textContent = "Inverser";
  btnInverse.setAttribute("id", "btn");
  row.appendChild(btnInverse);

  btnInverse.addEventListener("click", function () {
    let sexeCell = document.getElementById("nomCell2" + (idRow + 1));
    let nomCell = document.getElementById("nomCell" + (idRow + 1));

    console.log("SexeCell ::: ", sexeCell.innerText);
    console.log("nomCell ::: ", nomCell);

    let inverse = nomCell.textContent;
    nomCell.textContent = sexeCell.textContent;
    sexeCell.textContent = inverse;
  });

  let btnCheck = document.createElement("input");
  btnCheck.type = "checkbox";
  btnCheck.setAttribute("id", "btnCheck_");
  btnCheck.setAttribute("class", "btnCheck_");
  row.appendChild(btnCheck);
}
