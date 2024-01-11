document.getElementsByClassName("navigation-btn")[0].onclick = () => {
  document
    .getElementsByClassName("navigation-btn")[0]
    .classList.toggle("active");
  let dis = document.getElementById("nav-list").style.display;

  if (!dis || dis == "none") {
    document.getElementById("nav-list").style.display = "flex";
    localStorage.setItem("nav-list", "flex");
  } else {
    document.getElementById("nav-list").style.display = "none";
    localStorage.setItem("nav-list", "none");
  }
};

if (localStorage.getItem("nav-list") == "flex") {
  document.getElementsByClassName("navigation-btn")[0].click();
}
