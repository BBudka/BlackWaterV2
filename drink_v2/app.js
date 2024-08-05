// card.html
function loadHTML(url, elements) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      elements.forEach((element) => {
        element.innerHTML = data;
      });
    })
    .catch((error) => console.error("Error loading HTML:", error));
}
// x; tavisnii tuluu haradgahgui bolj bna
const cardElements = document.querySelectorAll(".card");
loadHTML("card.html", cardElements);

//section scroll

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("card-section");
  const dwwwwwwww = document.getElementById("card-section");
});

// more info
function toggleInfo() {
  var info = document.getElementById("moreInfo");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}
