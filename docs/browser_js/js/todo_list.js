let querytxtinput = document.querySelector("#txtinput");
let queryBtn = document.querySelector("#btnadd");
let querytextadd = document.querySelector("#textadd");

// add 버튼 클릭 시 추가
queryBtn.addEventListener("click", (event) => {
  additem(event);
});
// Enter로 추가
querytxtinput.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    additem(event);
  }
});

// delete 클릭 시 삭제
querytextadd.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});

// favorite 클릭
querytextadd.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite")
    event.target.innerHTML = "favorite_border";
});

// 입력받은 내용 출력 함수
function additem(event) {
  if (querytxtinput != "") {
    let newItem = `
          <div class="input-div">
                <div>
                    ${querytxtinput.value}
                </div>
            <span>
                <span class="favorite">
                    <i class="material-icons">favorite_border</i>
                </span>
                <span class="delete">
                    <i class="material-icons">delete</i>
                </span>
            </span>
          </div>`;
    querytextadd.insertAdjacentHTML("beforeend", newItem);
  } else {
    alert("Please enter a task");
  }
}
