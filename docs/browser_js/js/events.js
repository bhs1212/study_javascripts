function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change on Me";
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

function targetText(event) {
  // event는 안써도 적어두는게 좋음.
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text";
}
