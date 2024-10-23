let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navigation.classList.remove("active");
};

let navigation = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navigation.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navigation.classList.remove("active");
  search.classList.remove("active");
};
