const main = document.querySelector("#main");
const channels = document.querySelectorAll(".channels li")

for (const channel of channels) {
    channel.addEventListener("click", () => {
        main.innerText = channel.innerText;
    });
}