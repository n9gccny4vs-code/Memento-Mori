const params = new URLSearchParams(window.location.search);
if (params.get("wallpaper") === "1") {
  document.body.classList.add("wallpaper");
}
const grid = document.getElementById("grid");

const today = new Date();
const startOfYear = new Date(today.getFullYear(), 0, 1);
const dayOfYear =
  Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

const isLeapYear =
  new Date(today.getFullYear(), 1, 29).getMonth() === 1;

const totalDays = isLeapYear ? 366 : 365;

for (let i = 1; i <= totalDays; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  if (i < dayOfYear) dot.classList.add("past");
  if (i === dayOfYear) dot.classList.add("today");

  grid.appendChild(dot);
}
