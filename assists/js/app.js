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
function scrollToTop(){
    window.scrollTo(0 , 0);
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
