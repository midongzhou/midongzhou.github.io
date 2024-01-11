const intro = document.querySelector("#intro-writer");
const infos = [
  "Electrical Engineer",
  "Programmer",
  "Electrical engineering student",
];
const speed = 80;

function typeWriter(txt, i, j) {
  if (i < txt.length) {
    intro.innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => {
      typeWriter(txt, i, j);
    }, speed);
  } else {
    setTimeout(() => {
      intro.innerText = "> ";
      j = (j + 1) % infos.length;
      typeWriter(infos[j], 0, j);
    }, speed * 10);
  }
}

try {
  typeWriter(infos[0], 0, 0);
} catch (err) {
  console.log(err);
}

document.getElementById("know-more")?.addEventListener("mouseover", () => {
  document.getElementById("intro").style.background = "black";
});

document.getElementById("know-more")?.addEventListener("mouseleave", () => {
  document.getElementById("intro").style.background = "transparent";
});

let down_button = document.getElementById("resume-button");
down_button?.addEventListener("click", () => {
  //download the resume
  window.open("assets/resume.pdf", "_blank");
});
