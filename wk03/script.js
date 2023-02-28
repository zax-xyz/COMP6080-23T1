const form = document.getElementById("form");
const input = document.getElementById("item");
const items = document.getElementById("items");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newLi = document.createElement("li");
    newLi.innerText = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.append("x")
    deleteBtn.addEventListener("click", () => {
        newLi.classList.add("done");
    })

    newLi.appendChild(deleteBtn);
    items.appendChild(newLi);
});