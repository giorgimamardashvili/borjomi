window.addEventListener("DOMContentLoaded", () => {
  function stickyMenuScroll() {
    const menu = document.getElementById("menu");
    const menuLeft = document.querySelector(".menu__left");
    const nav = document.querySelector(".nav");
    const basket = document.querySelector(".basket")
    if (window.innerWidth > 1024) {
      if (window.pageYOffset > 60) {
        menu.classList.add("scrolling");
        menuLeft.children[0].children[1].classList.add("active");
        menuLeft.children[0].children[0].classList.remove("active");
        nav.classList.add("scrolling");
        basket.classList.add("scrolling");
      } else {
        menu.classList.remove("scrolling");
        menuLeft.children[0].children[1].classList.remove("active");
        menuLeft.children[0].children[0].classList.add("active");
        nav.classList.remove("scrolling");
        basket.classList.remove("scrolling");
      }
    }else {
      menu.classList.remove("scrolling");
    }
  }

  window.addEventListener("scroll", stickyMenuScroll);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  function navMenu() {
    const button = document.querySelector(".left-menu__menu"),
    black = document.querySelector(".nav__black"),
    menu = document.querySelector(".nav__menu"),
    close = document.getElementById("navClose");

    
    button.addEventListener("click", () => {
      console.log(button)
        black.classList.toggle("active");
        menu.classList.toggle("active");
        menu.parentNode.classList.toggle("active");
        if(black.classList.contains("active")){
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "";
        }
        
    })

    black.addEventListener("click", () => {
      black.classList.remove("active");
      menu.classList.remove("active");
      menu.parentNode.classList.remove("active")
      document.body.style.overflow = "";
  });
    

    close.addEventListener("click", () => {
        black.classList.remove("active");
        menu.classList.remove("active");
        menu.parentNode.classList.remove("active")
        document.body.style.overflow = "";
    });
  }
  navMenu();

  function searchMob() {
    const search = document.getElementById("searchForm");
    const black = document.querySelector(".modal-black");
    const button = document.getElementById("menuSearch");

    if (window.innerWidth <= 1024) {
      button.addEventListener("click", () => {
        black.classList.add("active");
        search.classList.add("active");
        document.body.style.overflow = "hidden";
      });
      black.addEventListener("click", () => {
        black.classList.remove("active");
        search.classList.remove("active");
        document.body.style.overflow = "";
      })
    }
  }

  searchMob();

  function burgerMenu() {
    const block = document.querySelector(".left-menu__block");
    const black = document.querySelector(".modal-black");
    const button = document.querySelector(".left-menu__burger");

    if (window.innerWidth <= 1024) {
      button.addEventListener("click", () => {
        button.classList.toggle("open");
        black.classList.toggle("active");
        block.classList.toggle("active");
        document.body.style.overflow = "hidden";
        if(!black.classList.contains("active")){
          document.body.style.overflow = "";
        }
      });
      black.addEventListener("click", () => {
        button.classList.remove("open");
        black.classList.remove("active");
        block.classList.remove("active");
        document.body.style.overflow = "";
      })
    }
  }

  burgerMenu();

  function basketApp() {
    const button = document.getElementById("shopping");
    const basket = document.querySelector(".basket");
    const black = document.querySelector(".modal-black");
    const close = document.querySelector(".basket__close");

    button.addEventListener("click", () => {
      black.classList.toggle("active");
      basket.classList.toggle("active");
      document.body.style.overflow = "hidden";
      if(!basket.classList.contains("active")) {
        document.body.style.overflow = "";
      }
    })

    black.addEventListener("click", () => {
      black.classList.remove("active");
      basket.classList.remove("active");
      document.body.style.overflow = "";
    });
    close.addEventListener("click", () => {
      black.classList.remove("active");
      basket.classList.remove("active");
      document.body.style.overflow = "";
  });
  }
  basketApp()

  function footerScroll() {
    const button = document.querySelector(".footer__middle").children[1];

    button.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  };
  footerScroll()

  function changeIngr() {
    const plus = document.querySelector(".basket").querySelector(".plus")
    const changing = document.querySelector(".changing-ingr");
    const close = document.querySelector(".changing-ingr__close");
    const choose = document.querySelector(".choose-ingr");
    const change = document.querySelector(".change");
    const question = document.querySelector(".changing-ingr__question");
    const wrapper = document.querySelector(".changing-ingr__wrapper");

    plus.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      changing.classList.add("active");
    })
    change.addEventListener("click", () => {
      question.classList.add("disabled");
      choose.classList.add("active");
      wrapper.classList.add("change");
    })

    close.addEventListener("click", () => {
      document.body.style.overflow = "";
      changing.classList.remove("active");
      choose.classList.remove("active");
      question.classList.remove("disabled");
    })
  }

  changeIngr();
});