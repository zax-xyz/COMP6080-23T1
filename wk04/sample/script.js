const circle = document.createElement("div");
circle.classList.add("circle");
document.body.appendChild(circle);

const numbers = document.createElement("div");
numbers.classList.add("numbers");
circle.appendChild(numbers);

for (let i = 1; i <= 12; i++) {
  const num = document.createElement("span");
  num.classList.add("number");
  const rotation = (360 / 12) * i;
  num.style.rotate = `${rotation}deg`;

  const span = document.createElement("span");
  span.innerText = i;
  span.style.rotate = `${-rotation}deg`;
  num.appendChild(span);

  numbers.appendChild(num);
}

const hourHand = document.createElement("div");
hourHand.classList.add("hand");
hourHand.classList.add("hour");

const minuteHand = document.createElement("div");
minuteHand.classList.add("hand");
minuteHand.classList.add("minute");

const secondHand = document.createElement("div");
secondHand.classList.add("hand");
secondHand.classList.add("second");

const hands = document.createElement("hands");
hands.classList.add("hands");
hands.appendChild(hourHand);
hands.appendChild(minuteHand);
hands.appendChild(secondHand);

circle.appendChild(hands);

const date = new Date();

const setRotations = () => {
  date.setSeconds(date.getSeconds() + 1);
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hoursRotation =
    (360 / 12) * hours + (360 / 12 / 60) * minutes + (360 / 12 / 60 / 60) * seconds;
  const minutesRotation = (360 / 60) * minutes + (360 / 60 / 60) * seconds;

  hourHand.style.rotate = `${hoursRotation}deg`;
  minuteHand.style.rotate = `${minutesRotation}deg`;
  secondHand.style.rotate = `${(360 / 60) * seconds}deg`;
};

setRotations();

setInterval(setRotations, 1000);

const form = document.createElement("form");
const input = document.createElement("input");
form.appendChild(input);
const message = document.createElement("p");
form.appendChild(message);
document.body.appendChild(form);

form.addEventListener("submit", e => {
  e.preventDefault();
  const [hours, minutes, seconds] = input.value.split(":");
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
});

input.addEventListener("input", () => {
  if (!input.value.match(/\d\d:\d\d:\d\d/)) {
    input.classList.add("error");
    message.innerText = ":(";
  } else {
    input.classList.remove("error");
    message.innerText = ":";
  }
});
