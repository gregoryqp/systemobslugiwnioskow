let nameFromInput = document.querySelector("#name");
let surnameFromInput = document.querySelector("#surname");
let dateFrom = document.querySelector("#dateFrom");
let dateTo = document.querySelector("#dateTo");
let daysSummary = document.querySelector("#daysSummary");
let sentDataButton = document.querySelector("#sentData");
let getDataButton = document.querySelector("#getDataFromLocalStorageButton");
let applicationsList = document.querySelector("#listaWnioskow");

let employee = {};

function createObject() {
  employee.name = nameFromInput.value;
  employee.surname = surnameFromInput.value;
  employee.dateStart = dateFrom.value;
  employee.dateEnd = dateTo.value;
  employee.summaryDays = daysSummary.value;
}

function setItemInDataStorage() {
  localStorage.setItem("employeeData", JSON.stringify(employee));
}

function getItemFromDataStorage() {
  let elementsFromList = document.createElement("div");
  let index = 0;
  let retrievedData = JSON.parse(localStorage.getItem("employeeData"));
  elementsFromList.classList.add("wniosekNaLiscie");

  elementsFromList.innerText =
    `${++index}` +
    ". " +
    retrievedData.name +
    " " +
    retrievedData.surname +
    " urlop od " +
    retrievedData.dateStart +
    " do " +
    retrievedData.dateEnd +
    " łącznie " +
    retrievedData.summaryDays +
    " dzień/dni.";

  applicationsList.appendChild(elementsFromList);
}

function newApplication() {
  createObject();
  setItemInDataStorage();
  window.alert("Wniosek wysłano");
}
window.addEventListener("storage", () => {
  if (localStorage !== null) {
    getItemFromDataStorage();
  }
});
window.addEventListener("load", () => {
  if (localStorage === null) {
    return;
  } else {
    getItemFromDataStorage();
  }
});

if (sentDataButton) {
  sentDataButton.addEventListener("click", newApplication);
} else {
  getDataButton.addEventListener("click", getItemFromDataStorage);
}

function rozwinHover() {
  let el = document.querySelector(".wniosek");
  el.classList.toggle("active");
}

function stopPropagation(event) {
  event.stopPropagation();
}
