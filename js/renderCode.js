import { cardsData } from "./cards";
import { sinopseData } from "./cards";

document.addEventListener("DOMContentLoaded", function () {
  const codeContainer = document.getElementById("codeContainer");

  function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("div");
    header.classList.add("header");

    const top = document.createElement("div");
    top.classList.add("top");

    const circles = ["red", "yellow", "green"];
    circles.forEach((color) => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      const span = document.createElement("span");
      span.classList.add(color, "circle2");
      circle.appendChild(span);
      top.appendChild(circle);
    });

    const title = document.createElement("div");
    title.classList.add("title");
    const p = document.createElement("p");
    p.id = "title2";
    p.textContent = data.title;
    title.appendChild(p);

    top.appendChild(title);
    header.appendChild(top);
    card.appendChild(header);

    const codeContainer = document.createElement("div");
    codeContainer.classList.add("code-container");

    const textarea = document.createElement("textarea");
    textarea.readOnly = true;
    textarea.name = "code";
    textarea.id = "code";
    textarea.classList.add("area");
    textarea.textContent = data.code;

    codeContainer.appendChild(textarea);
    card.appendChild(codeContainer);

    const button = document.createElement("button");
    button.classList.add("ui-btn");
    button.textContent = "View code";
    button.style.margin = '10px';
    button.addEventListener("click", function () {
      document.getElementById("popup-code").textContent = data.code;
      displayCodeExplanation(data.title);
      document.getElementById("popup-container").style.display = "flex";
    });
    card.appendChild(button);

    return card;
  }

  cardsData.forEach((data) => {
    const card = createCard(data);
    codeContainer.appendChild(card);
  });

  function displayCodeExplanation(title) {
    const explanation = sinopseData[title];

    document.getElementById('explanation').textContent = explanation;
  }

  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup-container").style.display = "none";
  });
});