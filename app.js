
async function loadComponent(path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById("app").innerHTML = html;
}

// Start with the welcome screen
loadComponent("components/welcome.html");
