export class Pet {
  #time = 0;
  #hunger = 0;
  #happiness = 0;
  #gameIntervalID;
  #hungerIntervalID;
  #happinessIntervalID;

  constructor(petType) {
    this.#hunger = 5;
    this.#happiness = 5;
    this.petType = petType;
  }

  startGame() {
    this.#time = 0;
    this.#hunger = 5;
    this.#happiness = 5;

    this.#gameIntervalID = setInterval(this.#updateGameTimer.bind(this), 1000);
    this.#happinessIntervalID = setInterval(
      this.#updateHappiness.bind(this),
      3000
    );
    this.#hungerIntervalID = setInterval(this.#updateHunger.bind(this), 2000);

    this.#setPicture(this.#happiness, this.#hunger, this.petType);

    document.querySelector("#lifeTime").innerText = this.#time;
    document.querySelector("#hunger-value").innerText = this.#hunger;
    document.querySelector("#happiness-value").innerText = this.#happiness;
  }

  #setPicture(happiness, hunger, petType) {
    const img = document.querySelector("#petImg");

    if (petType == "Slime") {
      img.src = new URL("../img/pet1_happy.png", import.meta.url);

      if (happiness <= 0 || hunger >= 10) {
        img.src = new URL("../img/pet1_dead.png", import.meta.url);
      } else if (happiness < 5 || hunger > 5) {
        img.src = new URL("../img/pet1_sad.png", import.meta.url);
      }
    } else if (petType == "Bacteria") {
      img.src = new URL("../img/pet2_happy.png", import.meta.url);

      if (happiness <= 0 || hunger >= 10) {
        img.src = new URL("../img/pet2_dead.png", import.meta.url);
      } else if (happiness < 5 || hunger > 5) {
        img.src = new URL("../img/pet2_sad.png", import.meta.url);
      }
    } else if (petType != "Slime" || petType != "Bacteria") {
      img.src = new URL("../img/questionmark.png", import.meta.url);

      if (happiness <= 0 || hunger >= 10) {
        img.src = new URL("../img/questionmark.png", import.meta.url);
      } else if (happiness < 5 || hunger > 5) {
        img.src = new URL("../img/questionmark.png", import.meta.url);
      }
    }
  }

  feed() {
    this.#hunger <= 0 ? 0 : this.#hunger--;
    this.#setPicture(this.#happiness, this.#hunger, this.petType);
    document.querySelector("#hunger-value").innerText = this.#hunger;
  }

  play() {
    this.#happiness >= 10 ? 10 : this.#happiness++;
    this.#setPicture(this.#happiness, this.#hunger, this.petType);
    document.querySelector("#happiness-value").innerText = this.#happiness;
  }

  endLife() {
    clearInterval(this.#gameIntervalID);
    clearInterval(this.#happinessIntervalID);
    clearInterval(this.#hungerIntervalID);
  }

  #updateHunger() {
    this.#hunger >= 10 ? 10 : this.#hunger++;
    this.#setPicture(this.#happiness, this.#hunger, this.petType);
    document.querySelector("#hunger-value").innerText = this.#hunger;
  }

  #updateHappiness() {
    this.#happiness <= 0 ? 0 : this.#happiness--;
    this.#setPicture(this.#happiness, this.#hunger, this.petType);
    document.querySelector("#happiness-value").innerText = this.#happiness;
  }

  #updateGameTimer() {
    this.#time++;
    document.querySelector("#lifeTime").innerText = this.#time;

    if (this.#happiness <= 0 || this.#hunger >= 10) {
      this.#setPicture(this.#happiness, this.#hunger, this.type);
      this.endLife();
    }
  }
}
