const circle = document.createElement("div");
circle.classList.add("circle");
document.body.appendChild(circle);

const numbers = document.createElement("div");
numbers.classList.add("numbers");
circle.appendChild(numbers);

for (let i = 1; i <= 12; i++) {
  const num = document.createElement("span");
  num.classList.add("number");
  const text = document.createElement("span");
  text.innerText = i;
  num.appendChild(text);

  const rotation = (360 / 12) * i;
  num.style.rotate = `${rotation}deg`;
  text.style.rotate = `${-rotation}deg`;

  numbers.appendChild(num);
}

const hands = document.createElement("div");
hands.classList.add("hands");
circle.appendChild(hands);

const hourHand = document.createElement("div");
hourHand.classList.add("hour");
hourHand.classList.add("hand");
hands.appendChild(hourHand);

const minuteHand = document.createElement("div");
minuteHand.classList.add("hand");
minuteHand.classList.add("minute");
hands.appendChild(minuteHand);

const secondHand = document.createElement("div");
secondHand.classList.add("second");
secondHand.classList.add("hand");
hands.appendChild(secondHand);

let date = new Date();

const setRotations = () => {
  date.setSeconds(date.getSeconds() + 1);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hourHand.style.rotate = `${(360 / 12) * hours}deg`;
  minuteHand.style.rotate = `${(360 / 60) * minutes}deg`;
  secondHand.style.rotate = `${(360 / 60) * seconds}deg`;
};
setRotations();

setInterval(() => {
  setRotations();
}, 1000);

const form = document.createElement("form");
const input = document.createElement("input");
form.appendChild(input);
document.body.appendChild(form);

const timezoneInput = document.createElement("input");
form.appendChild(timezoneInput);

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
form.appendChild(submitButton);

form.addEventListener("submit", e => {
  e.preventDefault();

  console.log("AAAAAAAAAAAAAA");
  if (timezoneInput.value) {
    fetch(`https://worldtimeapi.org/api/timezone/${timezoneInput.value}`)
      .then(resp => resp.json())
      .then(data => {
        const time = data.datetime.split("T")[1].split(".")[0];
        const [hours, minutes, seconds] = time.split(":");
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);
      });
  } else {
    const [hours, minutes, seconds] = input.value.split(":");
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
  }
});
