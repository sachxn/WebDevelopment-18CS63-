nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let table = document.getElementById("addHerePlz");

nums.map((item) => {
  let row = document.createElement("tr");
  let col1 = document.createElement("td");
  col1.innerText = item;
  let col2 = document.createElement("td");
  col2.innerText = item * item;
  let col3 = document.createElement("td");
  col3.innerText = item * item * item;
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  table.appendChild(row);
});
