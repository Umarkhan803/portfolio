const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

const fullText = "# Full Stack Web Applications";
let index = 0;

function updateText() {
  const textElement = document.getElementById("text");
  textElement.textContent = fullText.slice(0, index);
  index++;
  if (index > fullText.length) {
    index = 0;
  }
}

setInterval(updateText, 200);
