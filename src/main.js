import { generateGame } from "./modules/PetEnvo.js";

document.querySelector("#submit").addEventListener("click", gameStart);
let petName = document.querySelector("#nameInput");
let petType = document.querySelector("#typeInput");

function gameStart(e) {
  e.preventDefault();
  generateGame(petName.value, petType.value);
}
