const menuIcon = document.getElementById("manu-icon");
const menu = document.getElementById("manu");

menuIcon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }

  console.log('click')
});


