function showCategory(type) {
  let container = document.getElementById("names");
  container.innerHTML = "";

  DB[type].forEach(name => {
    let div = document.createElement("div");
    div.className = "name-box";

    div.innerText = name;

    let btn = document.createElement("button");
    btn.innerText = "Unlock";

    btn.onclick = () => {
      let cost = CONFIG[type.toUpperCase() + "_COST"];
      if (spendCoins(cost)) {
        navigator.clipboard.writeText(name);
        alert("Copied!");
      }
    };

    div.appendChild(btn);
    container.appendChild(div);
  });
}