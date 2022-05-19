import { Pet } from "./Pet.js";

export function generateGame(petName, petType) {
  let myPet = new Pet(petType);

  const divGameCon = document.createElement("div");
  const divNameCon = document.createElement("div");
  const petNameText = document.createElement("h1");

  const divImgCon = document.createElement("div");
  const img = document.createElement("img");

  const divBtnCon = document.createElement("div");
  const feedBtn = document.createElement("button");
  const playBtn = document.createElement("button");

  const divStatsCon = document.createElement("div");
  const titelGameTime = document.createElement("h4");
  const gameTimer = document.createElement("h4");
  const titelHunger = document.createElement("h4");
  const hungerValue = document.createElement("h4");
  const titelHappiness = document.createElement("h4");
  const happinessValue = document.createElement("h4");

  divGameCon.id = "game-container";

  divNameCon.id = "name-container";
  petNameText.id = "pet-name";
  petNameText.innerText = petName;

  divImgCon.id = "img-container";
  img.id = "petImg";

  divBtnCon.id = "btn-container";
  feedBtn.id = "feed-btn";
  feedBtn.innerText = "Feed";
  playBtn.id = "play-btn";
  playBtn.innerText = "play";

  divStatsCon.id = "stats-container";
  titelGameTime.innerText = "Life time:";
  gameTimer.id = "lifeTime";
  gameTimer.innerText = "0";
  titelHunger.innerText = "Hunger:";
  hungerValue.id = "hunger-value";
  hungerValue.innerText = "5";
  titelHappiness.innerText = "Happiness:";
  happinessValue.id = "happiness-value";
  happinessValue.innerText = "5";

  divNameCon.append(petNameText);
  divImgCon.append(img);
  divBtnCon.append(feedBtn, playBtn);
  divStatsCon.append(
    titelGameTime,
    gameTimer,
    titelHunger,
    hungerValue,
    titelHappiness,
    happinessValue
  );

  divGameCon.append(divNameCon, divImgCon, divBtnCon, divStatsCon);

  document.body.append(divGameCon);

  document.querySelector("#play-btn").addEventListener("click", play);
  document.querySelector("#feed-btn").addEventListener("click", feed);

  myPet.startGame();

  function play() {
    myPet.play();
  }

  function feed() {
    myPet.feed();
  }
}
