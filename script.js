let search = document.querySelector(".search-box"); //create a function for hide the navigation bar when click the search icon

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navigation.classList.remove("active");
};

let navigation = document.querySelector(".navbar");  //create a function for hide the search box when click the menu icon

document.querySelector("#menu-icon").onclick = () => {
  navigation.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navigation.classList.remove("active");
  search.classList.remove("active");
};
