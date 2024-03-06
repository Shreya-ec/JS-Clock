const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//12 hour clock format
let hourFormat = document.querySelector(".format-switch");
hourFormat.addEventListener("click", () => {
  hourFormat.classList.toggle("active");
  var formatValue = hourFormat.getAttribute("data-format");
  if (formatValue === "12") {
    hourFormat.setAttribute("data-format", "24");
  } else {
    hourFormat.setAttribute("data-format", "12");
  }
});

function setDate() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let d = a.getDate();
  let mo = a.getMonth();
  let month = months[mo];
  let day = days[a.getDay()];
  let year = a.getFullYear();

  var formatValue = hourFormat.getAttribute("data-format");
  if (formatValue === "12") {
    document.getElementById("meridiem").style.display = "inline-flex";
    if (h == 12) {
      document.getElementById("meridiem").innerText = "PM";
    } else if (h % 12 == 0) {
      h = h % 12;
      document.getElementById("meridiem").innerText = "AM";
    } else if (h > 12) {
      h = h % 12;
      document.getElementById("meridiem").innerText = "PM";
    } else if (h < 12) {
      document.getElementById("meridiem").innerText = "AM";
    }
  } else {
    h = a.getHours();
    document.getElementById("meridiem").style.display = "none";
  }

  // 00 for values <10
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("time").innerText = h + ":" + m + ":" + s;
  document.getElementById("day").innerText = day;
  document.getElementById("date").innerText = month + " " + d + ", " + year;
}
setInterval(setDate, 1000);
