const invisibleChars = [
  "\u200B",
  "\u200C",
  "\u200D",
  "\u3164",
  "\u2060"
];

const symbols = ["♡","✿","♛","★","✧","❀","☬","☯"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  let base = document.getElementById("base").value;
  let style = document.getElementById("style").value;
  let length = document.getElementById("length").value;

  if (!length) length = 3;

  let invisible = "";

  for (let i = 0; i < length; i++) {
    invisible += random(invisibleChars);
  }

  let result = "";

  if (style === "invisible") {
    result = invisible;
  }

  else if (style === "mix") {
    result = invisible + base + invisible;
  }

  else if (style === "stylish") {
    result = random(symbols) + invisible + base + invisible + random(symbols);
  }

  document.getElementById("output").innerText = result;
}

function copyText() {
  let text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied Successfully!");
}