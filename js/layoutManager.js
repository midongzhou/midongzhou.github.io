//get the saved layout
var layout = localStorage.getItem("layout");
if (layout == null) {
  layout = "lay1";
}

//set the layout
localStorage.setItem("layout", layout);

const css_files = ["background.css", "menu.css", "turnon.css", "index.css","portfolio.css","services.css","ai.css"];
const js_files = ["menu.js","intro.js"];

if (layout == "lay1") {
  css_files.forEach(function (file) {
    //add css file
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/lay1/" + file;
    document.head.appendChild(link);
    console.log("css/lay1/" + file);
  });

  window.addEventListener("load", function () {
    //add js files after load
    js_files.forEach(function (file) {
      //add css file
      const script = document.createElement("script");
      script.src = "js/lay1/" + file;
      document.body.appendChild(script);
    });

    document.getElementById("layout-changer").onclick = () => {
      //get the saved layout
      var layout = localStorage.getItem("layout");

      if (layout == "lay1") {
        layout = "lay2";
      } else {
        layout = "lay1";
      }

      //set the layout
      localStorage.setItem("layout", layout);

      //reload the page
      location.reload();
    };
  });
} else {
  css_files.forEach(function (file) {
    //add css file
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/lay2/" + file;
    document.head.appendChild(link);
  });

  window.addEventListener("load", function () {
    //add js files after load
    js_files.forEach(function (file) {
      //add css file
      const script = document.createElement("script");
      script.src = "js/lay2/" + file;
      document.body.appendChild(script);
    });

    document.getElementById("layout-changer").onclick = () => {
      //get the saved layout
      var layout = localStorage.getItem("layout");

      if (layout == "lay1") {
        layout = "lay2";
      } else {
        layout = "lay1";
      }

      //set the layout
      localStorage.setItem("layout", layout);

      //reload the page
      location.reload();
    };
  });
}

