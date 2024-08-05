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
const cardElements = document.querySelectorAll(".card");
loadHTML("card.html", cardElements);

//section scroll

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("card-section");
  const dwwwwwwww = document.getElementById("card-section");
});
