const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//State
let myLeads = [];
let oldLeads = [];

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItem = "";
  for (let i = 0; i < leads.length; i++) {
    let result = leads[i];
    listItem += `
    <li>
      <a target='_blank'  href='${result}'> ${result}</a>
    </li>`;
    console.log(listItem);

    //   const li = document.createElement("li");
    //   li.textContent = result;
    //   ulEl.append(li);
  }

  ulEl.innerHTML = listItem;
}

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tab[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});
