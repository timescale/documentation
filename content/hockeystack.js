if (!document.getElementById("hockey-stack")) {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/hockeystack@latest/hockeystack.min.js";
  script.id = "hockey-stack";
  script.setAttribute("data-apikey", "9d8a7a0c2744ed46a0d49caa7ef20d");
  script.setAttribute("data-cookieless", "1");
  script.setAttribute("data-auto-identify", "1");
  document.head.appendChild(script);
}
