let coins = 100;

function updateCoinsDisplay() {
  document.getElementById("coins").innerText = "Coins: " + coins;
}

function spendCoins(amount) {
  if (coins >= amount) {
    coins -= amount;
    updateCoinsDisplay();
    return true;
  }
  alert("Not enough coins!");
  return false;
}