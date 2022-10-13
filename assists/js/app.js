const navLi = document.querySelectorAll(
  "nav.navbar .container .navbar-nav li a"
);

const sections = document.querySelectorAll("section");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
function scrollToTop() {
  window.scrollTo(0, 0);
}
// window.onscroll = () => {
//     var current = "";
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         if(window.pageYOffset >= sectionTop)
//         {
//             current = section.getAttribute("id");
//         }
//     });

//     navLi.array.forEach(li => {
//         li.classList.remove('active');
//         if(li.classList.contains(current)){
//             li.classList.add('active');
//         }
//     });
// }

// Swap
function swap(e) {
  var id = e.id;
  const sectionLi = document.querySelectorAll(".accordion-card");
  const accordionLi = document.querySelectorAll(".accordion-list");
  accordionLi.forEach((accord) => {
    accord.classList.remove("border-color-focus");
  });
  sectionLi.forEach((section) => {
    section.classList.remove("active-accordion");
    if (section.classList.contains(id)) {
      section.classList.add("active-accordion");
      document.querySelector("#" + id).classList.add("border-color-focus");
    }
  });
}

// Toggle menu
function toggleMenu() {
  var item = document.querySelector(".menuM");
  item.classList.toggle("hideMenu");
}
