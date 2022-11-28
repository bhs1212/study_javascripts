let queryremove = document.querySelector("#remove");
queryremove.addEventListener("click", (event) => {
  removeEvent(event);
});

let queryhide = document.querySelector("#hide");
queryhide.addEventListener("click", (event) => {
  hideEvent(event);
});

let queryreset = document.querySelector("#reset");
queryreset.addEventListener("click", (event) => {
  resetEvent(event);
});

function removeEvent(event) {
  docRemove = document.querySelector("#remove");
  docRemove.style.display = "none";
}

function hideEvent(event) {
  docHide = document.querySelector("#hide");
  docHide.style.visibility = "hidden";
}

function resetEvent(event) {
  docReset = document.querySelector("#reset");
  docRemove.style.display = "block";
  docHide.style.visibility = "visible";
}
