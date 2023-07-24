const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = [];

saveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  renderLeads();
});

function renderLeads() {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    let result = myLeads[i];
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
