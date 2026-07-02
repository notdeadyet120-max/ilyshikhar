function openLetter() {
  document.getElementById("bgMusic").play();

  document.getElementById("home").classList.add("hidden");
  document.getElementById("letterScreen").classList.remove("hidden");
  document.getElementById("letterScreen").classList.add("active");
}

function openPromise() {
  document.getElementById("letterScreen").classList.add("hidden");
  document.getElementById("promiseScreen").classList.remove("hidden");
}

function backHome() {
  document.getElementById("promiseScreen").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}
