async function loadData() {
  DB.low = await fetch("names_low.json").then(r => r.json());
  DB.medium = await fetch("names_medium.json").then(r => r.json());
  DB.premium = await fetch("names_premium.json").then(r => r.json());
}

setInterval(loadData, 10000); // auto update every 10 sec