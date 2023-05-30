let aCard = document.querySelector(".card");
console.log(aCard);
aCard.onclick = (e) => {
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
  e.currentTarget.classList.toggle("card-selected");
};

// let elem = document.getElementById("card1");
// // elem.onclick = () => {}와 elem.onclick = function () {}가 동일한 의미
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
