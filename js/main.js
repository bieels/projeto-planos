// class MobileNavbar {
//     constructor(mobileMenu, navList, navLinks) {
//       this.mobileMenu = document.querySelector(mobileMenu);
//       this.navList = document.querySelector(navList);
//       this.navLinks = document.querySelectorAll(navLinks);
//       this.activeClass = "active";
  
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     animateLinks() {
//       this.navLinks.forEach((link, index) => {
//         link.style.animation
//           ? (link.style.animation = "")
//           : (link.style.animation = `navLinkFade 0.5s ease forwards ${
//               index / 7 + 0.3
//             }s`);
//       });
//     }
  
//     handleClick() {
//       this.navList.classList.toggle(this.activeClass);
//       this.mobileMenu.classList.toggle(this.activeClass);
//       this.animateLinks();
//     }
  
//     addClickEvent() {
//       this.mobileMenu.addEventListener("click", this.handleClick);
//     }
  
//     init() {
//       if (this.mobileMenu) {
//         this.addClickEvent();
//       }
//       return this;
//     }
//   }
  
//   const mobileNavbar = new MobileNavbar(
//     ".mobile-menu",
//     ".nav-list",
//     ".nav-list li",
//   );
//   mobileNavbar.init();

// window.onscroll = function() {
//   var botao = document.getElementById("botao");
//   if (window.pageYOffset > 200) { // Altere o valor "200" para a quantidade desejada
//     botao.classList.add("visible");
//     botao.classList.remove("hidden");
//   } else {
//     botao.classList.remove("visible");
//     botao.classList.add("hidden");
//   }
// };

