document.addEventListener("DOMContentLoaded", function () {
  const viewCodeButtons = document.querySelectorAll(".ui-btn");

  viewCodeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const codeTextArea = this.closest(".card").querySelector("textarea");
      if (codeTextArea) {
        const code = codeTextArea.value;
        document.getElementById("popup-code").textContent = code;
        document.getElementById("popup-container").style.display = "flex";
      } else {
        console.error("Textarea not found!");
      }
    });
  });

  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup-container").style.display = "none";
  });
});
