let output = document.getElementById("output");

let table = document.createElement("table");

for (let i = 1; i <= 12; i++) {

   let row = document.createElement("tr");
   let data = document.createElement("td");

   data.innerText = i;
   data.style.textAlign = "center";

   if (i % 4 == 0) {
      data.style.backgroundColor = "blue";
   }

   row.appendChild(data);
   table.appendChild(row);
}

output.appendChild(table);