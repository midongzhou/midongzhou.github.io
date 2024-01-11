const menu = document.getElementById("nav-list").getElementsByTagName("a");

for (let i = 0; i < menu.length; i++) {
   let link = menu[i].getAttribute("href");

   //check if the link is the current page
    if (window.location.href.indexOf(link) != -1) {
        menu[i].classList.add("active");
        break;
    }
}


let down_button = document.getElementById("resume-button");
down_button?.addEventListener("click", () => {
  //download the resume
  window.open("assets/resume.pdf", "_blank");
});